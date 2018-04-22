import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'

const ResultRow = ({ result }) => (
  <Table.Row>
    <Table.Cell>
      <Link to={`/results/${result.id}`}>{result.id}</Link>
    </Table.Cell>
    <Table.Cell>{result.amount}</Table.Cell>
    <Table.Cell>
      <Link to={`/results/${result.abc}`}>{result.abc_name}</Link>
    </Table.Cell>
    <Table.Cell>
      <Link to={`/results/${result.abc_name}`}>{result.abc_name}</Link>
    </Table.Cell>
    <Table.Cell>{result.state}</Table.Cell>
    <Table.Cell>{result.created_by}</Table.Cell>
  </Table.Row>
)

export default ResultRow
