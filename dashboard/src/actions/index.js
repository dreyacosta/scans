import GetScansAction from './GetScans';
import GetFindingsAction from './GetFindings';
import scanRepository from '../infrastructure/scanRepository';

const getScans = GetScansAction({ scanRepository});
const getFindings = GetFindingsAction({ scanRepository });

export {
  getScans,
  getFindings,
};