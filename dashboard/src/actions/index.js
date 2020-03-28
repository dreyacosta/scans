import GetScansAction from './GetScans';
import scanRepository from '../infrastructure/scanRepository';

const getScans = GetScansAction({ scanRepository});

export {
  getScans,
};