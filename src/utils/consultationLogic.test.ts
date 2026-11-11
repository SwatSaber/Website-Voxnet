import test from 'node:test';
import assert from 'node:assert/strict';
import { COVERAGE_CITIES } from '../data/voxnetContent';
import {
  calculateInfrastructureRecommendation,
  filterCoverageCities,
  validateConsultationForm,
} from './consultationLogic';

test('calculateInfrastructureRecommendation scales concurrent SIP channels and returns active-active SBC for BPO', () => {
  const smallSaas = calculateInfrastructureRecommendation({
    sector: 'saas-ai',
    dailyCalls: 1500,
    pbxMode: 'cloud',
    numbering: 'local-22',
  });
  assert.ok(smallSaas.recommendedChannels >= 30);
  assert.equal(smallSaas.sbcTopology, 'Dual-Node High-Availability SBC');
  assert.match(smallSaas.summaryText, /Cloud PBX Multi-Region/);

  const enterpriseBpo = calculateInfrastructureRecommendation({
    sector: 'bpo',
    dailyCalls: 60000,
    pbxMode: 'hybrid',
    numbering: '1500',
  });
  assert.ok(enterpriseBpo.recommendedChannels > smallSaas.recommendedChannels);
  assert.equal(enterpriseBpo.sbcTopology, 'Active-Active Geo-Redundant SBC');
  assert.equal(enterpriseBpo.securityLayer, 'IP Whitelisting + Enkripsi TLS/SRTP + DLP Suara');
});

test('filterCoverageCities matches 22 Indonesian cities by region and area code', () => {
  assert.equal(COVERAGE_CITIES.length, 22);

  const surabaya = filterCoverageCities(COVERAGE_CITIES, 'Semua', '031');
  assert.equal(surabaya.length, 1);
  assert.equal(surabaya[0].city, 'Surabaya');

  const sumateraCities = filterCoverageCities(COVERAGE_CITIES, 'Sumatera', '');
  assert.equal(sumateraCities.length, 6);
  assert.ok(sumateraCities.some((item) => item.city === 'Medan' && item.areaCode === '061'));
});

test('validateConsultationForm rejects empty or malformed input and accepts valid enterprise details', () => {
  const invalid = validateConsultationForm({
    fullName: '',
    companyName: 'A',
    corporateEmail: 'bukan-email',
    phoneNumber: '123',
    primaryNeed: '',
    technicalNotes: '',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.companyName);
  assert.ok(invalid.errors.corporateEmail);
  assert.ok(invalid.errors.phoneNumber);
  assert.ok(invalid.errors.primaryNeed);

  const valid = validateConsultationForm({
    fullName: 'Budi Santoso',
    companyName: 'PT Nusantara Contact Solutions',
    corporateEmail: 'budi.santoso@nusantarabpo.co.id',
    phoneNumber: '+62 812 8899 7766',
    primaryNeed: 'SIP Trunk & Interkoneksi SBC',
    technicalNotes: 'Butuh 300 kanal konkuren di Jakarta dan Surabaya',
  });
  assert.equal(valid.isValid, true);
  assert.deepEqual(valid.errors, {});
});

import {
  computeDesktopSideSpace,
  computeGoldenColumns,
  GOLDEN_SCALE,
  PHI,
} from './goldenRatio';

test('golden ratio spatial scale produces balanced 1440px desktop margins and 1.618 split', () => {
  assert.deepEqual(GOLDEN_SCALE, {
    micro: 6,
    xs: 10,
    base: 16,
    sm: 26,
    md: 42,
    lg: 68,
    xl: 110,
    xxl: 178,
  });

  const desktop = computeDesktopSideSpace(1440);
  assert.equal(desktop.outerMargin, 110);
  assert.equal(desktop.innerPadding, 68);
  assert.equal(desktop.totalSideSpace, 178);
  assert.equal(desktop.usableContentWidth, 1084);

  const cols = computeGoldenColumns(desktop.usableContentWidth);
  assert.equal(cols.majorColumn, 644);
  assert.equal(cols.minorColumn, 398);
  assert.ok(Math.abs(cols.ratio - PHI) < 0.005);
});
