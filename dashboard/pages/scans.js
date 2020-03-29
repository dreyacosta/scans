import Link from 'next/link';
import { Header, Table, Label } from 'semantic-ui-react';

import Layout from '../components/Layout';

import { getScans } from '../src/actions';
import GetScansPresenter from '../src/presentation/GetScansPresenter';

const Scans = ({ scans }) => {
  return (
    <Layout>
      <Header as='h1'>Scan list</Header>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Repository name</Table.HeaderCell>
            <Table.HeaderCell>Scan status</Table.HeaderCell>
            <Table.HeaderCell>Findings</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {scans.map((scan, i) => {
            return (
              <Table.Row key={i}>
                <Table.Cell>
                  {scan.status === 'SUCCESS'
                    ? <Link href="/scans/[id]/findings" as={`/scans/${scan.id}/findings`}><a>{scan.repositoryName}</a></Link>
                    : <span>{scan.repositoryName}</span>}
                </Table.Cell>
                <Table.Cell>
                  {scan.status === 'SUCCESS'
                    ? <Label color={'green'}>{scan.status}</Label>
                    : scan.status === 'FAILURE'
                      ? <Label color={'red'}>{scan.status}</Label>
                      : <Label>{scan.status}</Label>}
                </Table.Cell>
                <Table.Cell><Label>{scan.findings}</Label></Table.Cell>
                <Table.Cell>{scan.timestamp}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </Layout>
  );
};

export const getServerSideProps = GetScansPresenter({ getScans });

export default Scans;