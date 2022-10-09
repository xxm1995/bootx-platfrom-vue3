import type { App } from 'vue'
import { Button } from './Button'
import {
  Layout,
  Input,
  InputNumber,
  Empty,
  Select,
  Switch,
  Tree,
  TreeSelect,
  Card,
  Form,
  Row,
  Col,
  Modal,
  Dropdown,
  Radio,
  Steps,
  Spin,
  Menu,
  Drawer,
  Tooltip,
  Tag,
  Divider,
  DatePicker,
  TimePicker,
  Descriptions,
  Space,
} from 'ant-design-vue'

export function registerGlobComp(app: App) {
  app.use(Input)
  app.use(Button)
  app.use(Layout)
  app.use(InputNumber)
  app.use(Tag)
  app.use(Space)
  app.use(Modal)
  app.use(Drawer)
  app.use(Row)
  app.use(Col)
  app.use(Radio)
  app.use(Divider)
  app.use(DatePicker)
  app.use(TimePicker)
  app.use(Empty)
  app.use(Select)
  app.use(Switch)
  app.use(Tree)
  app.use(TreeSelect)
  app.use(Card)
  app.use(Menu)
  app.use(Tooltip)
  app.use(Descriptions)
  app.use(Steps)
  app.use(Form)
  app.use(Spin)
  app.use(Dropdown)
}
