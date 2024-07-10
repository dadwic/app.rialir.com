import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AppBar from '@/components/AppBar';
import Copyright from '@/components/Copyright';

export default function PrivacyPolicy() {
  const locale = useLocale();
  const dir = locale === 'en' ? 'ltr' : 'rtl';

  return (
    <div dir={dir} id="main">
      <AppBar dir={dir} />
      <Container sx={{ mt: 2 }}>
        <Typography component="h1" variant="h4">
          Frequently Asked Questions
        </Typography>
        <div>
          <h3>What is the Currency of Iran?</h3>
          <p>
            The official currency of Iran is the Iranian Rial (IRR), that
            includes the currency of all banknotes and coins.
          </p>
          <h3>What is Difference Between Iranian Rial and Iranian Toman?</h3>
          <p>
            Iranian Rial is the official currency of Iran, but Toman is commonly
            used by Iranians to express the amount of money. 1 Toman is equal to
            10 Rials. To express the amount of money in exchanges and banks the
            official currency, Rial, is used, while to tell prices of meals and
            goods in restaurants and shops, Toman is used.
          </p>
          <h3>rialir.com’s Rates are in Rial or Toman?</h3>
          <p>All prices on rialir .com are in Iranian Toman</p>
          <h3>
            Why Other Online Currency Converter such as XE and Google Display
            Different Rial Rate than rialir.com?
          </h3>
          <p>
            Foreign currencies in Iran are exchanged at two different rates: the
            official government rate and the free market rate. The official
            exchange rate is 42,000 rials (4200 Toman) to $1. The official rate
            is set by the government and is primarily used for the import of
            goods and services deemed essential by the government. In contrast,
            the free market rate is determined by the market forces of supply
            and demand. Individuals cannot buy any foreign currency at the
            official rate, and therefore the official rate has little practical
            use for most people. Most exchange websites like XE and Google
            display the official rate of the Rial, but rialir.com displays the
            free market rate.
          </p>
          <h3>Where can I Exchange My Money in Iran?</h3>
          <p>
            Official money exchanges can be found in all major cities in Iran.
            Exchanges are called “Sarrafi” in Persian. Many exchanges in Tehran
            are located in Ferdowsi Square.
          </p>
          <h3>Is Visa or MasterCard Accepted in Iran?</h3>
          <p>
            No, Iran does not have access to the international banking system.
            International credit cards like visa and master cards are not
            accepted anywhere in Iran. Shops, public transportation, hotels and
            restaurants will only accept cash or Iranian debit cards.
          </p>
          <h3>Do You Trade Currency? No.</h3>
          <h3>Where do You Get the Free Market Rial Rates?</h3>
          The rates displayed on rialir.com are acquired from exchanges in
          Tehran.
          <h3>
            For further inquiries contact us by email at{' '}
            <a href="mailto:info@rialir.com" target="_blank">
              info@rialir.com
            </a>
            .
          </h3>
        </div>
      </Container>
      <Copyright />
    </div>
  );
}
