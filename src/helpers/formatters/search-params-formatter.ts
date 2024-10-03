export function searchParamsFormatter(searchParams: Record<string, any>) {
  const params = Object.entries(searchParams).reduce((acc, [key, value]) => {
    acc[key] = String(value);
    return acc;
  }, {} as Record<string, string>);

  const newSearchParams = new URLSearchParams(params).toString();

  return newSearchParams;
}
