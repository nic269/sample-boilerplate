import styled from 'styled-components'
import { Select as AntdSelect } from 'antd'
import { AppstoreOutlined, AlignLeftOutlined } from '@ant-design/icons'

import proximity from '../../styles/mixins/proximity'

export const Select = styled(AntdSelect)`
  .ant-select-selection-placeholder {
    color: ${(props) => props.theme.textColor};
  }
`

const viewStyle = (props) => ({
  color: props.active === 'true' ? props.theme.primaryColor : props.theme.textColor,
  'font-size': '20px',
  cursor: 'pointer',
})

export const GridView = styled(AppstoreOutlined)((props) => ({
  ...viewStyle(props),
  'margin-left': proximity(7),
}))

export const ListView = styled(AlignLeftOutlined)(viewStyle)
