export type ShipmentType = 'parcel' | 'document' | 'bulky';
export type ShippingScope = 'domestic' | 'international';

export type QuoteInput = {
  originCity: string;
  destinationCity: string;
  weight: number;
  length: number;
  width: number;
  height: number;
  shipmentType: ShipmentType;
  cashOnDelivery: boolean;
  scope: ShippingScope;
};

export type QuoteOption = {
  carrier: string;
  service: string;
  eta: string;
  price: number;
  billableWeight: number;
  breakdown: Array<{ label: string; amount: number }>;
};

const domesticCities = ['الرياض', 'جدة', 'الدمام', 'المدينة', 'مكة', 'أبها'];
const internationalCities = ['Dubai', 'Abu Dhabi', 'Cairo', 'Manama', 'Doha', 'Kuwait City'];

const cityZones: Record<string, 'central' | 'west' | 'east' | 'south' | 'gcc' | 'mena'> = {
  'الرياض': 'central',
  'جدة': 'west',
  'المدينة': 'west',
  'مكة': 'west',
  'الدمام': 'east',
  'أبها': 'south',
  'Dubai': 'gcc',
  'Abu Dhabi': 'gcc',
  'Doha': 'gcc',
  'Manama': 'gcc',
  'Kuwait City': 'gcc',
  'Cairo': 'mena'
};

const carriers = [
  {
    carrier: 'MASARX Express',
    service: 'Same Network',
    base: 17,
    perKg: 4.6,
    domesticEta: '1-2 يوم',
    internationalEta: '3-5 أيام',
    codFee: 11,
    handling: 3
  },
  {
    carrier: 'SPL Priority',
    service: 'Priority',
    base: 19,
    perKg: 4.3,
    domesticEta: '2-3 أيام',
    internationalEta: '4-6 أيام',
    codFee: 12,
    handling: 2
  },
  {
    carrier: 'Aramex Commerce',
    service: 'Commerce Saver',
    base: 21,
    perKg: 4.9,
    domesticEta: '1-3 أيام',
    internationalEta: '3-7 أيام',
    codFee: 14,
    handling: 4
  }
];

function roundMoney(value: number) {
  return Math.round(value * 100) / 100;
}

function getZoneMultiplier(originCity: string, destinationCity: string, scope: ShippingScope) {
  if (scope === 'international') {
    const destinationZone = cityZones[destinationCity] ?? 'mena';
    return destinationZone === 'gcc' ? 2.2 : 2.8;
  }

  const originZone = cityZones[originCity] ?? 'central';
  const destinationZone = cityZones[destinationCity] ?? 'central';
  if (originZone === destinationZone) {
    return 1;
  }
  if (destinationZone === 'south') {
    return 1.28;
  }
  return 1.15;
}

function getShipmentTypeMultiplier(shipmentType: ShipmentType) {
  switch (shipmentType) {
    case 'document':
      return 0.75;
    case 'bulky':
      return 1.35;
    default:
      return 1;
  }
}

export function calculateVolumetricWeight(length: number, width: number, height: number) {
  return roundMoney((length * width * height) / 5000);
}

export function buildQuotes(input: QuoteInput): QuoteOption[] {
  const volumetricWeight = calculateVolumetricWeight(input.length, input.width, input.height);
  const billableWeight = Math.max(input.weight, volumetricWeight, 0.5);
  const zoneMultiplier = getZoneMultiplier(input.originCity, input.destinationCity, input.scope);
  const typeMultiplier = getShipmentTypeMultiplier(input.shipmentType);
  const remoteFee = input.scope === 'international' ? 12 : zoneMultiplier > 1.2 ? 7 : 0;

  return carriers
    .map((carrier) => {
      const transport = (carrier.base + billableWeight * carrier.perKg) * zoneMultiplier * typeMultiplier;
      const cod = input.cashOnDelivery ? carrier.codFee : 0;
      const price = roundMoney(transport + carrier.handling + remoteFee + cod);

      return {
        carrier: carrier.carrier,
        service: carrier.service,
        eta: input.scope === 'international' ? carrier.internationalEta : carrier.domesticEta,
        billableWeight: roundMoney(billableWeight),
        price,
        breakdown: [
          { label: 'النقل الأساسي', amount: roundMoney(transport) },
          { label: 'المعالجة', amount: carrier.handling },
          { label: 'منطقة إضافية', amount: remoteFee },
          { label: 'رسوم COD', amount: cod }
        ]
      };
    })
    .sort((a, b) => a.price - b.price);
}

export { domesticCities, internationalCities };
