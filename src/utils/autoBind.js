export default function autoBind(context, proto) {
  for (const key of Object.getOwnPropertyNames(proto)) {
    const { value } = Object.getOwnPropertyDescriptor(proto, key);

    if (typeof value === 'function') {
      context[key] = value.bind(context);
    }
  }
}
