/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */

import Filter from './Filter';

const OverviewTable = () => (
  <>
    <section className="text-gray-600 body-font">
      <div className="container px-5 mx-auto">
        <Filter />
        <div className="w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-yellow-100 rounded-tl rounded-bl">
                  NFT Collection
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-yellow-100">
                  Volume(ETH)
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-yellow-100">
                  Marketcap(ETH)
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-yellow-100">
                  #Transactions
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-yellow-100">
                  Max Price
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-yellow-100">
                  Avg Price
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-yellow-100">
                  Wallets
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-yellow-100">
                  Contract Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-5 text-sm">Axie Infinity</td>
                <td className="px-4 py-5 text-sm">3.1K </td>
                <td className="px-4 py-5 text-sm">3.4K</td>
                <td className="px-4 py-5 text-sm text-gray-900">3.4K</td>
                <td className="px-4 py-5 text-sm">3.4K</td>
                <td className="px-4 py-5 text-sm">3.4K</td>
                <td className="px-4 py-5 text-sm">3.4K</td>
                <td className="px-4 py-5 text-sm text-gray-900">1567d ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </>
);

export default OverviewTable;
