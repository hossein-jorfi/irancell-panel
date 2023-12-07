const Suggests = () => {
  return (
    <div className="mt-6 p-5 bg-white rounded-xl">
      <p className="font-lalezar text-xl">بسته های پیشنهادی مخصوص خود شما!</p>

      <div className="relative overflow-x-auto mt-4 border rounded-xl">
        <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase border-b">
            <tr>
              <th scope="col" className="px-6 py-3">
                تاریخ انقضا بسته
              </th>
              <th scope="col" className="px-6 py-3">
                نام بسته
              </th>
              <th scope="col" className="px-6 py-3">
                تخفیف
              </th>
              <th scope="col" className="px-6 py-3">
                قیمت
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr className="bg-white">
              <td className="px-6 py-4">14 شهریور 1401</td>
              <td className="px-6 py-4">بسته اینترنت سه‌ماهه</td>
              <td className="px-6 py-4">20 %</td>
              <td className="px-6 py-4">130،000</td>
              <td className="cursor-pointer">
                <span
                  style={{
                    boxShadow: "0 0 10px rgba(255, 215, 0, 0.7)",
                  }}
                  className="bg-gold-400 text-wh p-2 text-white rounded-md"
                >
                  خرید
                </span>
              </td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-4">14 شهریور 1401</td>
              <td className="px-6 py-4">بسته اینترنت سه‌ماهه</td>
              <td className="px-6 py-4">20 %</td>
              <td className="px-6 py-4">130،000</td>
              <td className="cursor-pointer">
                <span
                  style={{
                    boxShadow: "0 0 10px rgba(255, 215, 0, 0.7)",
                  }}
                  className="bg-gold-400 text-wh p-2 text-white rounded-md"
                >
                  خرید
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Suggests;
