import { Header, Table } from 'semantic-ui-react';

import Layout from '../../../components/Layout';

import { getFindings } from '../../../src/actions';
import GetFindingsPresenter from '../../../src/presentation/GetFindingsPresenter';

const Findings = ({ repository, findings }) => {
  return (
    <Layout>
      <Header as='h1'>Findings for: {repository}</Header>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Rule ID</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Severity</Table.HeaderCell>
            <Table.HeaderCell>Path</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {findings.map((finding, i) => {
            return (
              <Table.Row key={i}>
                <Table.Cell>{finding.ruleId}</Table.Cell>
                <Table.Cell>{finding.description}</Table.Cell>
                <Table.Cell>{finding.severity}</Table.Cell>
                <Table.Cell>{finding.path}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </Layout>
  );
};

export const getServerSideProps = GetFindingsPresenter({ getFindings });

export default Findings;