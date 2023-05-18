// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    [
      {
        ID: 1, 
        BookTitle: 'Brenda-Book-1',
        AmazonAffiLink: 'www.amazon.com/Book1',
      },
      { 
        ID: 2,
        BookTitle: 'Brenda-Book-2',
        AmazonAffiLink: 'www.amazon.com/Book2',
      },
      { 
        ID: 3,
        BookTitle: 'Brenda-Book-3',
        AmazonAffiLink: 'www.amazon.com/Book3',
      },
    ]
  )
}
