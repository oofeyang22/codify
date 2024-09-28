"use client"
import styles from "./adminPostForm.module.css"
import { addPost } from "@/lib/action"
import { useFormState } from 'react-dom'

const AdminPostForm = ({userId}) => {
  const [state, formAction] = useFormState(addPost, undefined)
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add new post</h1>
      <input type="hidden" name="userId" value={userId}/>
      <input type="text" name="title" placeholder="title"/>
      <input type="text" name="slug" placeholder="slug"/>
      <input type="text" name="img" placeholder="img"/>
      <textarea type="text" name="desc" placeholder="desc" rows={10} cols={30}/>
      <button>Add</button>
      {state && state.error}
    </form>
  )
}

export default AdminPostForm