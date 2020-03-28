import { Header, Table } from 'semantic-ui-react';

import Layout from '../../components/Layout';
import FindingDataBuilder from '../../src/domain/FindingDataBuilder';

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
                <Table.Cell>Line: {finding.lineNumber} {finding.pathName}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </Layout>
  );
};

const FindingSerializer = {
  toJSON: (finding) => {
    const { ruleId, metadata, location } = finding;

    return {
      ruleId,
      description: metadata.description,
      severity: metadata.severity,
      pathName: location.path,
      lineNumber: location.positions.begin.line,
    };
  }
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  console.log('GetFindings', id);

  const findings = [
    new FindingDataBuilder().build(),
    new FindingDataBuilder().build(),
  ];

  return {
    props: {
      repository: id,
      findings: findings.map(FindingSerializer.toJSON)
    }
  }
};

export default Findings;