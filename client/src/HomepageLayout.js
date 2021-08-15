import React from 'react';
import ResponsiveContainer from './containers/ResponsiveContainer';
import {
  AboutCWS,
  ServicesOffered,
  Referrals,
  ContactUsForm,
  Footer,
} from './components';

const HomepageLayout = () => (
  <ResponsiveContainer>
    {AboutCWS()}
    {ServicesOffered()}
    {Referrals()}
    {ContactUsForm()}
    {Footer()}
  </ResponsiveContainer>
);

export default HomepageLayout;
