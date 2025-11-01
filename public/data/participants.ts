export interface IParticipant {
    title: string
    link?: string
    id: string
    description: string
    website?: string
    address: string
    phone: string
    image?: string
}

export const participants: IParticipant[] = [
    {
        title: "Ресторан «Осип Терлеев»",
        link: "https://vk.com/osipterleev",
        id: "restoran-osip-terleev",
        description:
            "Ресторан Современной Сибирской кухни, специализирующийся на Чалдонской кухне и кухне Омского Прииртышья.",
        website: "http://osip-terleev.ru",
        address: "ул. Пушкина, 112",
        phone: "+7 (923) 697-94-02",
        image: "https://sun9-37.userapi.com/s/v1/if2/Ut3VWP4FZQPXJozAkdOeAsdB6a0BEZmBG0M-V6TTKa7gKLQTldn-dWQZOT03acAIdiL45ZsuNvO_v4Gkbhd8N-mR.jpg?quality=95&as=32x30,48x45,72x67,108x101,160x150,240x224,360x336,480x449,540x505,640x598,720x673,1080x1009,1280x1196,1440x1346,1694x1583&from=bu&cs=540x0",
    },
    {
        title: "«Моя Вкусная Студия»",
        link: "https://vk.com/vkusnaya_studio",
        id: "moya-vkusnaya-studia",
        description:
            'Гастрономический проект "Моя Вкусная Студия" – это уютная и просторная студия в самом центре Омска с панорамным видом на город, оборудованная всем необходимым для проведения профессиональных кулинарных курсов и мастер-классов, а также корпоративов и праздников.',
        website: "https://vkusnayastudio.ru",
        address: "ул. Гагарина, 14 (офис 602)",
        phone: "+7 (905) 099-96-02",
        image: "https://sun9-66.userapi.com/s/v1/ig2/HVXtX4SsDzJgFPpJfIXbCuW6zQJCcvVyJWUFS14ANmHRi3Y1dt9J_huiOF8d4QBdVn1NsovVp9aTiIbpEdNmEqmh.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,2560x2560&from=bu&cs=540x0",
    },
    {
        title: "Ресторан «Уютный Шинок»",
        link: "https://vk.com/shinok.omsk",
        id: "restoran-uyutny-shinok",
        description:
            "Ресторан «Шинок» предлагает своим гостям блюда славянской кухни, оформленные в аутентичном стиле. Интерьер заведения очень нравится гостям, а официанты одеты в национальные костюмы.",
        website: "http://www.shinok-omsk.ru",
        address: "ул. Тарская, 10",
        phone: "+7 (900) 679-99-39",
        image: "https://sun9-64.userapi.com/s/v1/if2/caiqAi-pqoEsYdsdJ4FrMCqYUX9vqlO1ePD-BS9eauiNN8B2-leb5eAOekQNY1QEsK9FHSVzi_d8R9j6L6YyJSNk.jpg?quality=95&as=32x22,48x33,72x49,108x74,160x109,240x163,360x245,480x327,540x368,640x436,720x490,1080x735,1280x871,1440x980,2560x1743&from=bu&cs=540x0",
    },
    {
        title: "Ресторан «Колчакъ»",
        link: "https://vk.com/kolchak.omsk",
        id: "restoran-kolchak",
        description:
            "«Колчакъ» — ресторан, расположенный в самом сердце Омска. Он предлагает своим гостям широкий выбор блюд, включая мясо, рыбу, супы, салаты, выпечку и напитки.",
        website: "https://kolchakclub.ru",
        address: "ул. Броз Тито, 2/1",
        phone: "+7 (3812) 45-99-99",
        image: "https://sun9-81.userapi.com/s/v1/ig2/RUv72wsmwmdDu6l-YFyqK32-igd2W_qhqSJdCLS1xtejhz6T5icAiqMNzYtmZvAxIuFIp6TnE2_diAXv9EzPvgUk.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,2560x2560&from=bu&cs=540x0",
    },
    {
        title: "Ресторан «PROЖАРКА»",
        link: "https://vk.com/prozharka_omsk",
        id: "restoran-prozharka",
        description:
            "Погрузитесь в атмосферу «PROЖАРКИ» — мясного ресторана, концепция которого построена на магии трёх элементов: здесь живой огонь шепчет свои секреты сочнейшим стейкам, мощный гриль превращает каждый кусок в кулинарный шедевр, а первоклассное мясо становится центром вселенной для истинных гурманов.",
        website: "https://prozharkaomsk.taplink.ws/",
        address: "ул. Карла Маркса, 18/4",
        phone: "+7 (913) 148-98-72",
        image: "https://sun9-78.userapi.com/s/v1/ig2/shVQntqZd6QZRm0a1rUmCpjvNQqhfJkYXK7AZsIHG6p7LekAp4sD_0Rbd9obdprhCzc9pdXoTfqOq8PbK3L0Nuug.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,1920x1920&from=bu&cs=540x0",
    },
    {
        title: "Ресторан «Сенкевич»",
        link: "https://vk.com/senkevich_omsk",
        id: "restoran-senkevich",
        description:
            "«Сенкевич» — историческое место в городе. Это не просто ресторан, а история омского ресторанного дела. Именно здесь впервые в Омске подавали суши, мы первыми ввели блюда высокой европейской кухни, а любимые всеми блюда сохранены в нашем меню с новой подачей. Мы можем приятно удивить любого гостя! Наш ресторан — территория свободного выбора. Место, где доступны вкусы жизни. Уже 23 года мы продолжаем свое путешествие на вершину вкуса и перед нами нет границ. Мы объединяем разные направления, тенденции, национальные кухни в одно целое с авторской подачей.»",
        website: "http://senkevich-omsk.ru",
        address: "ул. Съездовская, 1",
        phone: "+7 (913) 678-97-89",
        image: "https://sun9-23.userapi.com/s/v1/ig2/AF-oFPeOp6vgsthpYTkJMrRqYQNVUQP7klEKaN7b-8Ldf4LOihdXdgnTPj3Z2Jnp3cEQZDVmBR09rnWlN3sMKMUH.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720&from=bu&cs=540x0",
    },
    {
        title: "Чайная «Винтаж»",
        link: "https://vk.com/teasophy",
        id: "chaynaya-vintazh",
        description:
            "«Винтаж» развивает чайно-кофейную культуру, объединяя людей за единым столом, сохраняя этнокультурные традиции.",
        website: "http://vintage-tea.com",
        address: "ул. Волочаевская, 15",
        phone: "+7 (962) 054-54-50",
        image: "https://sun9-80.userapi.com/s/v1/ig2/yvpo2cj53LVXOHzIZ2JISLu5_H6r-QOjeLRI5nZJFMlwlQ3KI9ULQFc0e_LExcEr4bJyKXfCuUgAP01eU1Lq56mA.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&from=bu&cs=540x0",
    },
    {
        title: "Ресторан «Клуб Деловых Людей»",
        link: "https://vk.com/kdloms",
        id: "restoran-klub-delovykh-lyudey",
        description: "Национальные традиции русского гостеприимства.",
        website: "http://kdlomsk.ru",
        address: "ул. Яковлева, 143",
        phone: "505-605",
    },
    {
        title: "Ресторан «Вкус темноты»",
        link: "https://vk.com/vkustemnoty",
        id: "restoran-vkus-temnoty",
        description:
            "Эксклюзивный в Сибири ресторан-аттракцион!Ужин проходит в абсолютной темноте, Вас сопровождают и обслуживают незрячие официанты, меню - сюрприз для каждого гостя.",
        website: "http://vkustemnoty.ru/",
        address: "ул. Ленина, 38",
        phone: "+7 (3812) 58-08-67",
        image: "https://sun9-74.userapi.com/s/v1/ig2/hV4W5K0sG7hxa1aXPDzhUJf65JQBU7dRzApWIGuGnJ92FIyOdNL9Hf_G7bbXPsj27e8dmjwr74xr7WmxLDwIwr1-.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280&from=bu&cs=540x0",
    },
    {
        title: "Кафе «Монплезир»",
        link: "https://vk.com/kafemonplesir",
        id: "kafe-monplezir",
        description:
            "Это уютный уголок Франции в сердце города, созданный для тех, кто ценит истинное удовольствие от общения. Кафе совмещает в себе изысканную романтику парижского бистро и теплую, гостеприимную атмосферу для всей семьи.",
        website: "https://vk.com/kafemonplesir",
        address: "ул. Ленина, 38/4",
        phone: "+7(3812) 51-15-52",
        image: "https://sun9-12.userapi.com/s/v1/ig1/ycfV4YqFzAe2B-Mm3bNspGvddLu21FoonlLkvrK2qwQ3yODBJNFJoL3DzraW8qMECnuG3l2L.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x639,720x719,1080x1079,1182x1181&from=bu&cs=540x0",
    },
    {
        title: "Ресторан «DVORIK»",
        id: "restoran-dvorik",
        description:
            "Ресторан в исторической части центра города с 10 летней историей с неповторимой атмосферой. Кухня сочетает в себе направление Итальянской и средиземноморской кухни с постоянными сезонными блюдами русской и сибирской кухни",
        website: "http://dvorikwine.ru",
        address: "ул. Бударина 3",
        phone: "+7 (381) 230-90-21",
        image: "https://sun9-32.userapi.com/s/v1/ig2/eLqC_p_WOAhJuL2benHJwaW9laDTLjUllfTiGQwFULOwlL-wCdDk6Dd4fgtzkocIRoNUGldlZW3lQvILn8Oaq7PJ.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,850x850&from=bu&cs=540x0",
    },
    {
        title: "«Мастерская сладостей» Стародумовой Юлии",
        link: "https://vk.com/shastie_est_omsk",
        id: "masterskaya-sladostey-starodumovoy-yulii",
        description:
            "Сохранение традиций и гастрономического наследия, соединяя проверенные временем рецепты с современными техниками и подачей.",
        website: "https://t.me/shastie_estomsk",
        address: "ул. 2-я Военная, 19",
        phone: "+7 (965) 988-65-90",
        image: "https://sun9-54.userapi.com/s/v1/ig2/aSPrbhaTVxGRJMWXRXYFAg23r8vFcdPG_WlrjCSCxlDGlK5YHH3VFeyEbEJHhV_f96EZXcXIQV5zSh9aFeDXM9YW.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&cs=540x0",
    },
    {
        title: "«Рычков Пирогов» Муромцевские пироги от Алексея Рычкова",
        link: "https://vk.com/rrpirog",
        id: "rychkov-pirogov-muromtsevskie-pirogi-ot-alexeya-rychkova",
        description:
            "Возрождение кухни севера Омской области. Гастрономические ужины с погружением в историю.",
        address: "р. п. Муромцево, с. Петропавловка - доставка",
        phone: "+7 (950) 796-88-11",
        image: "https://sun9-87.userapi.com/s/v1/ig2/IR8maEYn3ilZpZjEzb2uCGvkHm8XXsr8WYhCJ0i5Q3iIT3RDsZiWhyavd4MKUCK5Tt-6-j3Qy1jP5Be-_BQ5a0E_.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1024x1024&from=bu&cs=540x0",
    },
    {
        title: "Бистро-Пекарни Кондитерские «Провиант»",
        link: "https://vk.com/proviant_omsk",
        id: "bistro-pekarni-konditerskie-proviant",
        description:
            "Бистро-Пекарни Кондитерские «Провиант» имеют широкий выбор блюд, более 500 наименований продукции, в том числе русская и сибирская кухня, блины с различными начинками, курники и различные пироги.",
        website: "https://proviant-omsk.ru/",
        address:
            "ул. Красный путь, 63; пр. Карла Маркса, 10; ул. 70 лет Октября, 7; пр. Мира, 54; пр. Мира, 7А; ул. Пушкина, 112; пр. Карла Маркса, 60.",
        phone: "+7(3812) 37-77-16",
        image: "https://sun9-70.userapi.com/s/v1/ig2/BECKSYXAO3LluD2nkLq3g5FCwXjUpJ_3Et6TZH2BA6Do11jObN1z5F_5O_a2QV-pRSY18UZ_TRvBWwOaD-tqR660.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,2160x2160&from=bu&cs=540x0",
    },
    {
        title: "Ресторан «ФедяДичь»",
        link: "https://vk.com/fedyadichomsk",
        id: "restoran-fedyadich",
        description:
            "ФедяДичь — гастрономическое пространство с северным направлением кухни.Наша главная идея — работа с локальными и фермерскими продуктами, приготовленными с любовью и заботой, а в основе философии — простота и высокое качество. Наше меню наполнено преданностью и вдохновением, чтобы удовлетворить самые изысканные вкусы.",
        website: "https://fedyadichomsk.ru",
        address: "ул. Карла Либкнехта, 11",
        phone: "+7(913) 148-90-44",
        image: "https://sun9-84.userapi.com/s/v1/ig2/T60nORS_mtRP9-uTcyCmfuFaP0icnQMApp_FqdCDQcONMLYd05TkXKuiubCZI_UOzHwh27nMaphn_LUqPX9ts4Jf.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&from=bu&cs=540x0",
    },
    {
        title: "Ресторан Пеликан",
        link: "https://vk.com/pelikan_restoran",
        id: "restoran-pelikan",
        description:
            "Атмосферный ресторан в центре города с панорамным видом на набережную!",
        website: "https://pelikan1997.ru/",
        address: "Иртышская набережная 12",
        phone: "+7 (3812)38-831-5",
        image: "https://sun9-46.userapi.com/s/v1/ig2/K43zRLJBz9tp2MKRtItgkzqNsA_SeS7n5-LDfwZqKLiT5AgktpA0nZl2WgWufzU43pgJnHQBGlS_KlUmgg1o_YkP.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,983x983&from=bu&cs=540x0",
    },
    {
        title: "Cronwell Ника Center",
        link: "https://vk.com/nikarest",
        id: "cronwell-nika-center",
        description: "Лучшее место для вкусных обедов и уютных вечеров!",
        website: "https://nika-center.cronwell.com",
        address: "ул. Лермонтова, 62",
        phone: "+7 (908) 108-03-03",
        image: "https://sun9-11.userapi.com/s/v1/ig2/mw8YTFGDr2cBYhSouY7cmR5OkL749WLv5b8QHADWPo_1hT6AvLAdXLmhb6ajC8UvZdBizVljunbpIGneSA2IYJIx.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1000x1000&from=bu&cs=540x0",
    },
    {
        title: "Cronwell Ника Center",
        link: "https://vk.com/nikarest",
        id: "cronwell-park-nika",
        description:
            "Cronwell Park «Ника» — это гостиница, расположенная в тихом и уютном месте на левом берегу города Омска.",
        website: "http://nika.cronwell.com/",
        address: "ул. Суворова, 110",
        phone: "+7 (991) 381-09-81",
        image: "https://sun9-51.userapi.com/s/v1/ig2/unusXdLf2MaRXYrjD1Ri9wHZQkIY9bDbtUqurDoRH_kCAU-DEeDEcdJq8BL6wY7eviMNhhMgL5R00hKi5zSXew6y.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1000x1000&from=bu&cs=540x0",
    },
    {
        title: "Ресторан «Метаморфозы»",
        link: "https://vk.com/mmz5060?from=groups",
        id: "restoran-metamorfozy",
        description:
            "«Метаморфозы» — гастрономический театр современной европейской и новой русской кухни. Мы переосмысляем знакомые рецепты через необычные сочетания и выразительную подачу, сохраняя комфорт и демократичную элегантность. Ресторан открыт не только для гостей отеля, но и для жителей города — место на каждый день и для любого случая.",
        website: "https://mmz5060.ru/",
        address: "ул. Щербанева, 20",
        phone: "+7 (3812) 92-50-60",
        image: "https://sun9-71.userapi.com/s/v1/ig2/8Pjw0jo0qUMuWHckIjmDXqfmGw1K7Suy5--3vDIcZ5zXop94UEcA1Y2D5quzup9cK70cWNDz5FAcLoTFHzpXUjKg.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&from=bu&cs=540x0",
    },
    {
        title: "«Фабрика Конарева»",
        link: "https://vk.com/kolchak.omsk",
        id: "fabrika-konareva",
        description:
            "Позвольте себе ресторанный ужин в будний день! «Фабрика Конарева» создаёт полуфабрикаты высочайшего уровня из натуральных продуктов. Никаких добавок и консервантов - только чистый вкус, который раскрывается за считанные минуты. Они объединяют эстетику, удобство и ответственный подход к производству, чтобы вы могли легко создать маленький гастрономический шедевр у себя дома.",
        website: "http://fabrika-konareva.ru",
        address: "ул. 10 лет Октября, 203В/1",
        phone: "+7 (3812) 67-85-55",
        image: "https://sun9-88.userapi.com/s/v1/ig2/WJ4J3FNwtr3vY6YVxc-6XFbCZ_ktPFBXv1woy03_M36BQgO7xNdmli0qm6DM46XSxb_GsfsVGqVD82x9yHt0SXWO.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1081,1280x1281,1440x1441,2002x2003&from=bu&cs=540x0",
    },
    {
        title: "Гастро-буфет «Два поэта»",
        link: "https://vk.com/dvapoetaomsk",
        id: "gastro-bufet-dva-poeta",
        description:
            "Гастробуфет «Два поэта» — это место, где традиции ресторанного качества сочетаются с демократичными ценами и удобством быстрого обслуживания.",
        website:
            "https://m.vk.com/away.php?to=https%3A%2F%2F%E4%E2%E0%EF%EE%FD%F2%E0.%F0%F4",
        address:
            "а: ул. Маяковского, 21; ул. 70 лет Октября, 7; ул. Красный путь, 63",
        phone: "+7 (3812) 30-85-08",
        image: "https://sun9-21.userapi.com/s/v1/ig2/io7LhK7VBfPv4sdsvb_uDEuyW4J6hyi6c9i2y4Ronp6v9DdMprJ-29p62-g2AckGHWLc2-6KhHcHOTCbI58FrUUf.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1300x1300&from=bu&cs=540x0",
    },
    {
        title: "Ресторан «Розы Морозы»",
        link: "https://vk.com/rozymorozy",
        id: "restoran-rozy-morozy",
        description:
            "Самый большой ресторан с национальной кухней в историческом центре города. 1000 квадратных метров гастрономического удовольствия и веселья.",
        website: "https://rozymorozy.orgs.biz",
        address: "ул. Ленина, 14",
        phone: "+7 (3812) 48-77-77",
        image: "https://sun9-25.userapi.com/s/v1/if2/A-MD6EEFEQ59y_qDPt2o4xCXfKsVSj9r7Xtt2e9wHBgsqzm9xT-qWGi4AYQBebBPXhpCRWEDTOK3loerZbX-4UJG.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x106,240x159,360x238,480x318,540x358,640x424,720x477,960x636&from=bu&cs=540x0",
    },
    {
        title: "Винный бар «Одно вино»",
        link: "https://vk.com/odnovino",
        id: "vinny-bar-odno-vino",
        description:
            "Винный бар с обширной винной картой, демократичными ценами и большим предложением российских вин.",
        website: "https://vk.com/odnovino",
        address: "ул. Ленина, 13А",
        phone: "+7 (3812) 28-09-05",
        image: "https://sun9-15.userapi.com/s/v1/ig2/nW0D86o9Pg-3jldRc3xyK3Bozbu04KGBzhmncPQ_W363l2YTM7MnZoBTvkrXGoGSiR1-4Z20WtOiAi2EeIoPgw2m.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,375x500&from=bu&cs=540x0",
    },
    {
        title: "Пекарня «Булочка с корицей»",
        link: "https://vk.com/bulochkaskoritsey_omsk",
        id: "pekarnya-bulochka-s-koritsey",
        description:
            "Пекарня с булочками, пирожными и теплыми блюдами в скандинавском стиле.",
        website: "https://vk.com/bulochkaskoritsey_omsk",
        address: "а: ул. Горная, 9; ул. 10 лет Октября, 76",
        phone: "+7 (3812) 49-99-94",
        image: "https://sun9-52.userapi.com/s/v1/ig2/7mULzv3L8Sd7lsgxBgjBouC11w8HJ29xsbUEgDM2na4FvdNLNRf-5ZZKqeNaAGuL2XPLPY9uD1YSfLRUfeTGp3Zg.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,2367x2367&from=bu&cs=540x0",
    },
    {
        title: "Ресторан «Джорджина»",
        link: "https://vk.com/georgina55",
        id: "restoran-dzhordzhina",
        description:
            "Семейный ресторан с грузинской и итальянской кухней, блюдами на гриле.",
        website: "https://vk.com/georgina55",
        address: "ул. 70 лет Октября, 19, цоколь",
        phone: "+7 (3812) 92-79-20",
        image: "https://sun9-82.userapi.com/s/v1/ig2/zEt_2LDBh110wdIK58xaEGDP-0IPF7JlHjgm1zGPvgowJVtrykXzRmIaOTV6dSw5a2cO0FHlM81LLurFZyNhm4il.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1000x1000&from=bu&cs=540x0",
    },
]
