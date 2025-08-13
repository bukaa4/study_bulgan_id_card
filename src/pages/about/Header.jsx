import { Layout, Typography } from 'antd'

const { Header: AntHeader } = Layout
const { Title, Text } = Typography

const Header = ({ name, title }) => (
  <AntHeader style={{
    backgroundColor: '#fff',
    padding: '20px 50px',
    borderBottom: '1px solid #f0f0f0'
  }}>
    <Title level={2} style={{ margin: 0 }}>{name}</Title>
    <Text type="secondary">{title}</Text>
  </AntHeader>
)

export default Header
