import classNames from "classnames"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`CresentInputCheckbox-${id}`)

  return (
    <div className="CresentInputCheckbox--container" data-testid={inputId}>
      <label
        className={classNames("CresentInputCheckbox--label", {
          "CresentInputCheckbox--label-checked": checked,
          "CresentInputCheckbox--label-disabled": disabled,
        })}
      />
      <input
        id={inputId}
        type="checkbox"
        className="CresentInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(!checked)}
      />
    </div>
  )
}
