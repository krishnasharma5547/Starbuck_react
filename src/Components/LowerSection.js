import React from 'react'
import H3 from './H3';
import ImportantText from './ImportantText';
import Pera from './Pera';

export default function LowerSection() {
  let link = "#";
  return (
      <div className="px-4 sm:px-12 py-12 bg-primary-100 mb-12 overflow-hidden">
        <Pera className="text-lg">
          At participating stores. Restrictions apply.
        </Pera>
        <div className="flex sm:flex-row flex-col sm:space-x-4">
          <div className="flex-1 space-y-4 mt-4 text-justify">
            <H3>EARNING STARS</H3>
            <Pera>
              Stars cannot be earned on purchases of alcohol, Starbucks Cards or
              Starbucks Card reloads.
            </Pera>
            <Pera>
              Earn 1 Star per $1 spent when you scan your member barcode in the
              app, then pay with cash, credit/debit cards or mobile wallets at
              participating stores. You can also earn 1 Star per $1 spent when
              you link a payment method and pay directly through the app.
            </Pera>
            <Pera>
              Earn 2 Stars per $1 spent when you load funds and pay with your
              digital Starbucks Card in the app. You can also earn 2 Stars per
              $1 spent when you pay in-person at a participating store with your
              registered physical Starbucks Card or scan your member barcode in
              the app, and then use any physical Starbucks Card (regardless of
              whether it is registered) to complete the purchase.
            </Pera>
            <H3> BENEFITS</H3>
            <Pera>
              Free refills available during same in-store visit only. To qualify
              for the Birthday Reward, you must have made at least one
              Star-earning transaction.
            </Pera>
          </div>
          <div className="flex-1 sm:space-y-4 mt-4 text-justify">
            <H3>TERMS OF USE</H3>
            <Pera>
              For full program details visit{" "}
              <a href={link}>
                <ImportantText>starbucks.com/rewards/terms</ImportantText>
              </a>
            </Pera>
            <Pera>
              * Earn 1 Star per $1 when digitally loading your Starbucks Card
              with your Starbucks® Rewards Visa® Card: See your Card Rewards
              Program Agreement for more details..
            </Pera>
            <Pera>
              Starbucks® Rewards benefits are available at participating
              Starbucks stores. Not all stores have the ability to honor Rewards
              at this time. Visit the
            </Pera>
            <Pera>
              <a href={link}> <ImportantText>Starbucks Store Locator</ImportantText></a>
              and search for locations honoring “Redeem Rewards”.
            </Pera>
            <Pera>
              Deposit and credit card products provided by JPMorgan Chase Bank,
              N.A. Member FDIC
            </Pera>
            <H3>REDEEMING REWARDS</H3>
            <Pera>
              Free refills available during same in-store visit only. To qualify
              for the Birthday Reward, you must have made at least one
              Star-earning transaction.
            </Pera>
          </div>
        </div>
      </div>
  );
}
