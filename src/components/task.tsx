import * as React from 'react'

interface Props {
  task: string
  i: number
  onClick: () => void
  onClickMove: () => void
}

export const Task: React.FC<Props> = (props) => {
  const { task, i, onClick, onClickMove, archiveBtn } = props;

  return (
    <li className="todo__list__item" key={i}>
      <p className="todo__list__item--title">{task}</p>
      <div className="todo__list__item__btn">
        {archiveBtn && <button className="move" onClick={onClickMove}></button>}
        <button className="delete" onClick={onClick}></button>
      </div>
    </li>
  )
}
