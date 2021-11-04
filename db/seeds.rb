user1 = User.create(name: "Restaurant Dogs", username: "hotdogs", password: "hotdogger")
melissa = User.create(name: "Melissa", username: "melissafunk", password: "hello")

stix = Restaurant.create(name: "STIX", address: "1353 Taraval St., San Francisco, CA 94116", image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/78678449_563411407811269_229291308747849728_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=973b4a&_nc_ohc=O2_9Bj4PC-cAX8xuC2z&_nc_ht=scontent-sjc3-1.xx&oh=6f64f386251e694949b6a434fcb81d5f&oe=61A716B4", url: "https://stixsf.square.site/", description: "Insta-Worthy Korean Style Corndogs")
rosamunde = Restaurant.create(name: "Rosamunde Sausage Grill", address: "2832 Mission St., San Francisco, CA 94110", image: "https://1w0eqx36klwk3lol8s1na5ig-wpengine.netdna-ssl.com/wp-content/uploads/2012/09/williamsburg_slides_3-610x283.jpg", description: "Housemade Grilled Sausages Including Their Infamous Boar Sausage")
berliner = Restaurant.create(name: "Berliner Berliner", address: "545 Haight St., San Francisco, CA 94117", image: "https://s3-media0.fl.yelpcdn.com/bphoto/wAsStbKlCJ9MUjkNuO8qRQ/o.jpg", description: "German-Style Bratwursts Known For Their Vegan Options")
umai = Restaurant.create(name: "Umai Savory Hot Dogs", address: "845 Market St Ste FC-7, San Francisco, CA 94103", image: "http://umaicatering.com/wp-content/uploads/2019/05/umaihotdogspic.jpg", url: "https://www.grubhub.com/restaurant/umai-savory-hot-dogs-845-market-st-san-francisco/2591804?=undefined&utm_source=google&utm_medium=cpc&utm_campaign=&utm_term=f%3Aaggregator_serp%3Afeature_id_fprint%3D16435423210384931700&utm_content=acct_id-3075806372%3Acamp_id-13461984436%3Aadgroup_id-130848333722%3Akwd-1064958486878%3Acreative_id-557982953705%3Aext_id-%3Amatchtype_id-%3Anetwork-g%3Adevice-c%3Aloc_interest-%3Aloc_physical-9031945&gclid=CjwKCAjwoP6LBhBlEiwAvCcthImNGa21iS0CwRaPXFpWVCOu126ldNM4m_RvXzcaJyUyXbfn-zLwTRoCCbUQAvD_BwE", description: "Fusion-Style Hot Dogs For Every Flavor")
street = Restaurant.create(name: "Bacon Dog Cart", address: "Mission District (usually near 19th x Mission), San Francisco, CA 94110", image: "https://s3-media0.fl.yelpcdn.com/bphoto/JXjBqjr690RCTsKgs_8JCg/o.jpg", url: "https://www.yelp.com/biz/bacon-dog-cart-san-francisco", description: "Bacon-Wrapped Street Dog AKA 'The SF Danger Dog'")
costco = Restaurant.create(name: "Costco Dog", address: "450 10th St., San Francisco, CA 94103", image: "https://pbs.twimg.com/media/E63i9PrVEAMoYks.jpg:large", url: "https://www.youtube.com/watch?v=d8EkqwE6sZk", description: "$1.50 Budget Classic Hot Dog")
doghaus = Restaurant.create(name: "Dog Haus", address: "60 Morris St, San Francisco, CA 94107", image: "https://d1ralsognjng37.cloudfront.net/f3c4fac2-6e8c-49fd-8622-8d6ac88fce56.jpeg", url: "https://www.grubhub.com/restaurant/dog-haus-60-morris-st-san-francisco/2647810", description: "Gourmet Hot Dogs Served on a King's Hawaiian Roll")
custom = Restaurant.create(name: "Custom")

dog1 = HotDog.create(name: "Potato Combo", dog_style: "Corn Dog: All-Beef and Mozzarella Cheese", restaurant_id: 1, user_id: 1,  image: "https://stixsf.square.site/uploads/1/3/1/2/131299315/s174769986217901303_p12_i1_w640.jpeg", toppings: "Battered with French Fries", condiments: "Available: Ketchup, Honey Mustard, Yellow Mustard, Spicy Mayo, Wasabi Mayo, Sweet Chili, Ranch")
dog2 = HotDog.create(name: "Hot Dog", dog_style: "Corn Dog: All-Beef", restaurant_id: 1, user_id: 1,  image: "https://stixsf.square.site/uploads/1/3/1/2/131299315/s174769986217901303_p3_i1_w640.jpeg", toppings: "Battered with Panko Bread Crumbs", condiments: "Available: Ketchup, Honey Mustard, Yellow Mustard, Spicy Mayo, Wasabi Mayo, Sweet Chili, Ranch")
dog3 = HotDog.create(name: "Cornflake Dog", dog_style: "Corn Dog: All-Beef", restaurant_id: 1, user_id: 1,  image: "https://stixsf.square.site/uploads/1/3/1/2/131299315/s174769986217901303_p45_i1_w2000.jpeg?width=640", toppings: "Batterd with Cornflakes", condiments: "Available: Ketchup, Honey Mustard, Yellow Mustard, Spicy Mayo, Wasabi Mayo, Sweet Chili, Ranch")
dog4 = HotDog.create(name: "Sweet Potato Combo", dog_style: "Corn Dog: All-Beef and Mozzarella Cheese", restaurant_id: 1, user_id: 1,  image: "https://stixsf.square.site/uploads/1/3/1/2/131299315/s174769986217901303_p72_i1_w2000.jpeg?width=640", toppings: "Battered with Sweet Potato", condiments: "Available: Ketchup, Honey Mustard, Yellow Mustard, Spicy Mayo, Wasabi Mayo, Sweet Chili, Ranch")

dog5 = HotDog.create(name: "Wild Boar", dog_style: "Wild Boar (with apples, cranberries, and spices)", restaurant_id: 2, user_id: 1,  image: "https://s3-media0.fl.yelpcdn.com/bphoto/Zaak_GCPtFs1NcXEVOejMA/o.jpg", toppings: "Available: Sauerkraut, Grilled Onions, Picked Onions, Hot Peppers, Sweet Peppers, Relish", condiments: "Available: Ketchup, Curry Ketchup, Dijon Mustard, Spicy Brown Mustard, Garlic-Pepper Mayo")
dog6 = HotDog.create(name: "Knockwurst Sausage", dog_style: "Grass-Fed Beef", restaurant_id: 2, user_id: 1,  image: "https://s3-media0.fl.yelpcdn.com/bphoto/FQfl-gXMCBPnGZAgRIpCkg/o.jpg", toppings: "Available: Sauerkraut, Grilled Onions, Picked Onions, Hot Peppers, Sweet Peppers, Relish", condiments: "Available: Ketchup, Curry Ketchup, Dijon Mustard, Spicy Brown Mustard, Garlic-Pepper Mayo")
dog7 = HotDog.create(name: "Hot Italian", dog_style: "Spicy Pork", restaurant_id: 2, user_id: 1,  image: "https://s3-media0.fl.yelpcdn.com/bphoto/hCtnzolODUIMvEzj5TKEUg/o.jpg", toppings: "Available: Sauerkraut, Grilled Onions, Picked Onions, Hot Peppers, Sweet Peppers, Relish", condiments: "Available: Ketchup, Curry Ketchup, Dijon Mustard, Spicy Brown Mustard, Garlic-Pepper Mayo")
dog8 = HotDog.create(name: "Duck & Fig Sausage", dog_style: "Duck & Pork (with spices and brandy)", restaurant_id: 2, user_id: 1,  image: "https://s3-media0.fl.yelpcdn.com/bphoto/1WuEXRmg-IeU91hWBGDDHg/o.jpg", toppings: "Available: Sauerkraut, Grilled Onions, Picked Onions, Hot Peppers, Sweet Peppers, Relish", condiments: "Available: Ketchup, Curry Ketchup, Dijon Mustard, Spicy Brown Mustard, Garlic-Pepper Mayo")

dog9 = HotDog.create(name: "Currywurst", dog_style: "Sliced Weiswurst", restaurant_id: 3, user_id: 1,  image: "https://s3-media0.fl.yelpcdn.com/bphoto/BbXzg2VoYW7y5J7bDeATvA/o.jpg", toppings: "Sauteed Onions, Hot or Sweet Peppers", condiments: "Curry Ketchup")
dog10 = HotDog.create(name: "Vegan Bratwurst", dog_style: "Vegan Sausage", restaurant_id: 3, user_id: 1,  image: "https://s3-media0.fl.yelpcdn.com/bphoto/1v7ycqIO9F3on0EfxxqM4g/o.jpg", toppings: "Available: Sauteed Onions, Sweet Peppers, Raw Onions, Relish, Hot Peppers, Sauerkraut", condiments: "Available: Brown Mustard, Dijon Mustard, Bavarian Mustard, Ketchup, Curry Ketchup, Mayo")
dog11 = HotDog.create(name: "Bratwurst", dog_style: "Pork and Beef", restaurant_id: 3, user_id: 1,  image: "https://s3-media0.fl.yelpcdn.com/bphoto/wAsStbKlCJ9MUjkNuO8qRQ/o.jpg", toppings: "Available: Sauteed Onions, Sweet Peppers, Raw Onions, Relish, Hot Peppers, Sauerkraut", condiments: "Available: Brown Mustard, Dijon Mustard, Bavarian Mustard, Ketchup, Curry Ketchup, Mayo")
dog12 = HotDog.create(name: "Smoked Beer", dog_style: "Smoked, Spicy Pork and Beef", restaurant_id: 3, user_id: 1,  image: "https://s3-media0.fl.yelpcdn.com/bphoto/xlu8mAR1BAlajnAnZWRNlA/o.jpg", toppings: "Available: Sauteed Onions, Sweet Peppers, Raw Onions, Relish, Hot Peppers, Sauerkraut", condiments: "Available: Brown Mustard, Dijon Mustard, Bavarian Mustard, Ketchup, Curry Ketchup, Mayo")

dog13 = HotDog.create(name: "Tokyo Signature", dog_style: "All-Beef", restaurant_id: 4, user_id: 1,  image: "http://umaicatering.com/wp-content/uploads/2019/05/TokyoSignature.png", toppings: "Caramelized Onions, Roasted Seaweed, White Sesame", condiments: "Teriyako Mayo, Umai Teriyaki Sauce")
dog14 = HotDog.create(name: "Shinjuku Shadow", dog_style: "Bratwurst (Pork and Beef)", restaurant_id: 4, user_id: 1,  image: "http://umaicatering.com/wp-content/uploads/2019/05/ShinjukuShadow.png", toppings: "Diced Daikon, Bonito Flakes, Green Onion, Furikake", condiments: "Spicy Cheddar Sauce, Umai Teriyaki Sauce")
dog15 = HotDog.create(name: "Seoul Storm", dog_style: "Polish (Smoked Pork and Beef)", restaurant_id: 4, user_id: 1,  image: "http://umaicatering.com/wp-content/uploads/2019/05/SeoulStorm.png", toppings: "Kimchi Relish, Green Onions, White & Black Sesame", condiments: "Sriracha, Umai Teriyaki Sauce")
dog16 = HotDog.create(name: "Texas Roundhouse", dog_style: "Chicken Hot Dog", restaurant_id: 4, user_id: 1,  image: "hhttp://umaicatering.com/wp-content/uploads/2019/05/TexasRoundhouse.png", toppings: "Batter Fried Onions, BBQ Chips", condiments: "Spicy Cheddar Sauce, House BBQ Sauce")

dog17 = HotDog.create(name: "Danger Dog", dog_style: "Bacon-Wrapped Hot Dog", restaurant_id: 5, user_id: 1,  image: "https://s3-media0.fl.yelpcdn.com/bphoto/Uk_PZtxJxqkgLgtb6r3Wcg/o.jpg", toppings: "Available: Sauteed Onions, Raw Onions, Sweet Peppers, Jalapenos", condiments: "Available: Ketchup, Yellow Mustard, Mayo")
dog18 = HotDog.create(name: "Hot Dog", dog_style: "All-Beef", restaurant_id: 6, user_id: 1,  image: "https://i.insider.com/5acbc9884d03862a3d8b4bd6?width=700", toppings: "Available: Raw Onions, Relish, Sauerkraut", condiments: "Available: Ketchup, Yellow Mustard")

dog19 = HotDog.create(name: "The Fonz", dog_style: "Spicy Italian", restaurant_id: 7, user_id: 1,  image: "https://doghaus.com/images/menu/haussausages/big/01.jpg", toppings: "Pastrami, Mozzarella")
dog20 = HotDog.create(name: "Chili Idol", dog_style: "All-Beef", restaurant_id: 7, user_id: 1,  image: "https://doghaus.com/images/menu/hausdogs/big/02.jpg", toppings: "Haus Chili, Onions", condiments: "Cheese Sauce")
dog21 = HotDog.create(name: "Old Town", dog_style: "Smoked Bacon-Wrapped All-Beef", restaurant_id: 7, user_id: 1,  image: "https://doghaus.com/images/menu/hausdogs/big/04.jpg", toppings: "Caramelized Onions, Pickled Jalapenos, Cotija Cheese", condiments: "Chipotle Aioli")
dog22 = HotDog.create(name: "Sooo Vegi", dog_style: "Beyond Sausage Hot Italian", restaurant_id: 7, user_id: 1,  image: "https://doghaus.com/images/menu/plantbased/big/04.jpg", toppings: "Wild Arugula, Avocado, Tomato, Crispy Onions", condiments: "Spicy Basil Aioli")

comment1 = Comment.create(user_id: 2, restaurant_id: 1, comment: "What a unique experience! I loved the cornflake battered corn dog.")
comment2 = Comment.create(user_id: 2, restaurant_id: 2, comment: "Rosamunde is a staple in SF. The wild boar is a must-have.")
comment3 = Comment.create(user_id: 2, restaurant_id: 3, comment: "German food at its finest! So great they even have vegan dogs.")
comment4 = Comment.create(user_id: 2, restaurant_id: 4, comment: "I love the variety and uniqueness of all the hot dogs they create! Can't wait to try them all.")
comment5 = Comment.create(user_id: 2, restaurant_id: 5, comment: "You get a hot dog from a sketchy cart in the Mission, but it's so great. Especially after a few beers!")
comment6 = Comment.create(user_id: 2, restaurant_id: 6, comment: "Hands-down best hot dog EVER! Simple and satisfying.")
comment7 = Comment.create(user_id: 2, restaurant_id: 7, comment: "Love the variety of hot dogs and the hawaiian buns are amazing!")

review1 = Review.create(user_id: 2, restaurant_id: 1, rating: 4, favorite: false)
review2 = Review.create(user_id: 2, restaurant_id: 2, rating: 5, favorite: false)
review3 = Review.create(user_id: 2, restaurant_id: 3, rating: 3, favorite: false)
review4 = Review.create(user_id: 2, restaurant_id: 4, rating: 4, favorite: false)
review5 = Review.create(user_id: 2, restaurant_id: 5, rating: 5, favorite: true)
review6 = Review.create(user_id: 2, restaurant_id: 6, rating: 5, favorite: true)
review7 = Review.create(user_id: 2, restaurant_id: 7, rating: 3, favorite: false)












