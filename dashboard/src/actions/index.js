import GetScansAction from './GetScans';
import GetFindingsAction from './GetFindings';
import SubmitScan from './SubmitScan';
import scanRepository from '../infrastructure/scanRepository';

const getScans = GetScansAction({ scanRepository});
const getFindings = GetFindingsAction({ scanRepository });
const submitScan = SubmitScan({ scanRepository });

export {
  getScans,
  getFindings,
  submitScan,
};