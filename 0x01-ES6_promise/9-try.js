#!/usr/bin/node

export default function guardrail(mathFunction) {
  const queue = ['Guardrail was processed'];
  let value;
  try {
    value = mathFunction();
    queue.unshift(value);
  } catch (e) {
    queue.unshift(String(e));
  }
  return queue;
}
