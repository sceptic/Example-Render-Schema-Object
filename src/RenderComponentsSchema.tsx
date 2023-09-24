export const RenderComponentsSchema = (ComponentSchema) =>
Object.keys(ComponentSchema).map((key) => {
  const item = ComponentSchema[key];
  if (item.show === false) return null;
  const Component = item.component;
  const { children, ...props } = item.props ?? {};
  if (item.children)
    return (
      <Component {...props}>
        {RenderComponentsSchema(item.children)}
      </Component>
    );
  return <Component {...props}>{children}</Component>;
});