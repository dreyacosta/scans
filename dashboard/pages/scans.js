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
                  <Link href="/findings/[id]" as={`/findings/${scan.id}`}><a>{scan.repositoryName}</a></Link>
                </Table.Cell>
                <Table.Cell>{scan.status}</Table.Cell>
                <Table.Cell><Label>{scan.findings}</Label></Table.Cell>
                <Table.Cell>20 mar 2020</Table.Cell>
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