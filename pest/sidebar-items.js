initSidebarItems({"macro":[["grammar!","A `macro` that defines each rule as a method on a `Parser` which parses from the current position. Rules are always defined between braces, with an optional symbol marking the type of rule defined."],["impl_rdp!","A `macro` useful for implementing the `Parser` `trait` as a recursive descent parser. It only accepts `grammar!` and `process!` calls that get implemented on `self`."],["process!","A `macro` for pattern-matching queued `Token`s generated by a `Parser`. It generates a method `process` on `&self` that processes the whole queue of `Token`s, reducing it to one single result."]],"mod":[["prelude","A `mod` that contains `pest::Input`, `pest::Parser`, `pest::StringInput`, and `pest::Token`."]],"struct":[["StringInput","A `struct` useful for matching in-memory `String`s."],["Token","A `struct` representing tokens generated by a parser."]],"trait":[["Input","A `trait` that defines an input for a `Parser`."],["Parser","A `trait` that defines a parser."]]});