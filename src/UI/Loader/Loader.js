import classes from './Loader.module.css'

export function Loader() {
  return (
    <div className={classes.center}>
      <span className={classes.loader}>Load&nbsp;ng</span>
    </div>
  )
}
