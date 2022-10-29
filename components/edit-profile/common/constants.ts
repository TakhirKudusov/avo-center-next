const validationRegExps = {
  name: /(^[a-zа-яё\s]{3,15}$)/gi,
  bio: /(^[a-zа-яё,.!?;:()\w\s]{0,150}$)/gi,
  url: /^((http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm,
  twitter: /(^@[a-z_\d]{4,15}$)/gi,
};

export { validationRegExps };
