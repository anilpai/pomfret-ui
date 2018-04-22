import React from 'react'
import { Table } from 'semantic-ui-react'
import Pagination from './pagination'
import FilterButton from './filter'

const ResultsTable = () => (
  <Table striped sortable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan="12" textAlign="right">
          <FilterButton />
        </Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>A</Table.HeaderCell>
        <Table.HeaderCell>B</Table.HeaderCell>
        <Table.HeaderCell>C</Table.HeaderCell>
        <Table.HeaderCell>D</Table.HeaderCell>
        <Table.HeaderCell>E</Table.HeaderCell>
        <Table.HeaderCell>F</Table.HeaderCell>
        <Table.HeaderCell>G</Table.HeaderCell>
        <Table.HeaderCell>H</Table.HeaderCell>
        <Table.HeaderCell>I</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>a1</Table.Cell>
        <Table.Cell>b1</Table.Cell>
        <Table.Cell>c1</Table.Cell>
        <Table.Cell>d1</Table.Cell>
        <Table.Cell>e1</Table.Cell>
        <Table.Cell>f1</Table.Cell>
        <Table.Cell>g1</Table.Cell>
        <Table.Cell>h1</Table.Cell>
        <Table.Cell>i1</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>a2</Table.Cell>
        <Table.Cell>b2</Table.Cell>
        <Table.Cell>c2</Table.Cell>
        <Table.Cell>d2</Table.Cell>
        <Table.Cell>e2</Table.Cell>
        <Table.Cell>f2</Table.Cell>
        <Table.Cell>g2</Table.Cell>
        <Table.Cell>h2</Table.Cell>
        <Table.Cell>i2</Table.Cell>
      </Table.Row>
    </Table.Body>
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan="12">
          <Pagination />
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)

export default ResultsTable
