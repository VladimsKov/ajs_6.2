// Homework ajs_6.2

export default function specialProps({
  name, id, description = 'Описание не доступно', icon,
}) {
  return [id, name, description, icon];
}
