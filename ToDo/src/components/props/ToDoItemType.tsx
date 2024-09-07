import { oneOf, shape, string } from "prop-types"

export const ToDoItemType = shape({
    title: string.isRequired,
    datetime: string.isRequired,
    status: oneOf(['active', 'completed'])
})