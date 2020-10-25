import styled from 'styled-components'
import { Select as AntdSelect } from 'antd'
import { AppstoreOutlined, AlignLeftOutlined } from '@ant-design/icons'

import theme from '../../styles/theme/theme'
import proximity from '../../styles/mixins/proximity'

export const Select = styled(AntdSelect)`
  .ant-select-selection-placeholder {
    color: ${theme["text-color"]};
  }
`

const viewStyle = (props) => ({
  color: props.active === 'true' ? theme["primary-color"] : theme["text-color"],
  'font-size': '20px',
  cursor: 'pointer',
})

export const GridView = styled(AppstoreOutlined)((props) => ({
  ...viewStyle(props),
  'margin-left': proximity(7),
}))

export const ListView = styled(AlignLeftOutlined)(viewStyle)
