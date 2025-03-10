/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx10e63668b7c18eba',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'c8a324facd73653c84d8f6c7c35d0968',

  PROVINCE: '河南',
  CITY: '郑州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '韩佳慧',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oS0kq68YEWYcxgIx0V6dY1BCGtYM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'rFgVylJoEO0w-mrR-Wvdaj-O9W1SXJt5ggyNq7t9D9M',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-23',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '韩佳慧', year: '2004', date: '01-23',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '2-13',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-02-13' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2020-02-13' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'rFgVylJoEO0w-mrR-Wvdaj-O9W1SXJt5ggyNq7t9D9M',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oS0kq65_ft2r-WkOg8iAsbtIuZdw',
    }
  ],

}

module.exports = USER_CONFIG

