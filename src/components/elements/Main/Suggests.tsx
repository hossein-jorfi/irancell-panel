const Suggests = () => {
  const data = [
    {
      date: "۱۴ شهریور ۱۴۰۲",
      name: "بسته اینترنت سه‌ماهه",
      discount: "۲۰٪",
      price: "130،000",
    },
    {
      date: "۱۲ خرداد ۱۴۰۲",
      name: "بسته ترکیبی هفته‌ای",
      discount: "۴۵٪",
      price: "45،000",
    },
    {
      date: "۱۵ تیر ۱۴۰۲",
      name: "بسته اینترنت یکماهه",
      discount: "۴۵٪",
      price: "50،000",
    },
  ];

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
            {data.map((item) => (
              <tr key={item.name} className="bg-white">
                <td className="px-6 py-4">{item.date}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.discount}</td>
                <td className="px-6 py-4">{item.price}</td>
                <td className="cursor-pointer pl-3 xl:pl-0">
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Suggests;
