import CheckIcon from './assets/icons/check.svg?react'
import PencilIcon from './assets/icons/pencil.svg?react'
import PlusIcon from './assets/icons/plus.svg?react'
import SpinnerIcon from './assets/icons/spinner.svg?react'
import TrashIcon from './assets/icons/trash.svg?react'
import XIcon from './assets/icons/x.svg?react'
import Badge from './components/badge'
import Button from './components/button'

import Icon from './components/icon'
import Text from './components/text'

export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-1">
        <Text variant="body-sm-bold" className="text-pink-base">
          Hello world!
        </Text>
        <Text className="text-green-base">Hello world!</Text>
        <Text variant="body-md-bold">Hello world!</Text>
        <Text>Hello world!</Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} />
        <Icon svg={CheckIcon} />
        <Icon svg={PencilIcon} />
        <Icon svg={PlusIcon} />
        <Icon svg={SpinnerIcon} animate />
        <Icon svg={XIcon} />
      </div>

      <div>
        <Badge variant="primary">5</Badge>
        <Badge variant="secondary">2 de 5</Badge>
      </div>

      <div>
        <Button icon={PlusIcon}>Nova tarefa</Button>
      </div>
    </div>
  )
}
