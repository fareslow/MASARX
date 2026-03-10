const queues = ['integration-sync', 'shipment-create', 'tracking-refresh', 'notifications'];

function bootstrap() {
  // In the next iteration this worker will host BullMQ processors and schedules.
  // For now it documents the intended queue boundaries and keeps the workspace complete.
  console.log('MASARX worker ready');
  console.table(queues.map((name) => ({ queue: name, status: 'planned' })));
}

bootstrap();
