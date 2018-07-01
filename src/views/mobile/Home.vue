<template>
  <main class="home">
    <header>
      <section class="content">
        <img src="../../assets/pc/home/logo.png" alt="" class="logo">
        <div class="des">
          <p class="title">MusicLife 音乐生活</p>
          <p class="title">颠覆性区块链音乐生态交易系统</p>
        </div>
        <div class="des">
          <p>结合音乐软件与听歌硬件，用户通过听歌即可投资音乐</p>
          <p>音乐人或唱片公司可通过每次播放直接获得收益</p>
        </div>
        <router-link class="btn" to="/mobile/login" v-if='!is_login'>加入生态</router-link>
        <router-link class="btn" to="/mobile/wechatuser" v-else>查看主页</router-link>
      </section>
    </header>

    <section class="block-list">
      <section class="block-item block1">
        <section class="block-text">
          <p class="tips">
            <span class="border-left"></span>
            <span>关于我们</span>
            <span class="border-right"></span>
          </p>
          <p class="title">什么是音乐生活?</p>
          <img src="../../assets/pc/home/block1.png" class="block-img" alt="">
          <p class="des">
            音乐生活是一个基于区块链的音乐生态交易系统，由软件SDK系统、硬件嵌入式系统、音乐交易所三部分组成。我们为接入生态的音乐重建价格估值体系，并让用户可以通过听歌本身自动投资音乐，让音乐人与唱片公司在每次播放中都获得收益。音乐生活建立了一种全新的计价生态，通过音乐的真实收听人数来自动计算播放定价与音乐估值，并让用户通过付费播放音乐直接自动购买音乐的一部分股权，实现音乐价值的真正共享与正向流通。音乐生活对现有的音乐行业将产生极大帮助，并打破版权垄断与盗版侵权的僵局，真正让音乐行业的每个环节都充分受益。音乐生活由新加坡非营利组织MusicLife Foundation与日本公司音乐生活株式会社共同运营。
          </p>
          <p class="more">
            <a class="btn" href="https://qn-qn-kibey-static-cdn.app-echo.com/MusicLife-Blockchain%20Music%20Trading%20and%20Sharing%20Platform%20Power%20by%20Ethereum_V1.1.pdf" >
              <img src="../../assets/pc/home/btn-icon1.png" alt="">
              <span>阅读白皮书了解更多</span>
            </a>
          </p>
        </section>
      </section>

      <section class="block-item block2 block-bg">
        <section class="block-text">
          <p class="tips">
            <span class="border-left"></span>
            <span>基于区块链</span>
            <span class="border-right"></span>
          </p>
          <p class="title">基于区块链和通证经济建立的音乐生态</p>
          <img src="../../assets/pc/home/block2.png" class="block-img" alt="">
          <p class="des">
            区块链是一种技术架构，主要用于解决生活中的信任、记账、确权等问题。音乐自从转化为纯数字资产后， 始终面临着巨大的知识产权盗版风险与难以确权的困扰。音乐人、唱片公司、音乐互联网渠道商因此难以通过销售音乐来获得足够的收益。 音乐生活建立了一种全新的音乐定价生态，通过音乐的真实收听人数来自动计算播放定价与音乐估值， 并让用户通过付费播放音乐直接自动购买音乐的一部分虚拟分红权。由于音乐数量庞大，且股东众多， 这一模式在现实生活中无法通过律师团队结合互联网实现，但通过区块链却能完美进行快速交易、记账与确权。 因此，音乐生活选择区块链技术建立生态， 同时将平台所有权益进行通证 (Token) 化，并发行在生态中使用的数字货币MitCoin (MITC)。 所有MITC持有者都是Musiclife所有人，享有收入分红、资产增值、选举监督、特殊使用等系列权利。 通过MITC可以对社区所有成员形成强激励，让每个人积极推动平台生态发展。 音乐生活的主网将于2019年上线，主网上线前，MITC会基于以太坊的ERC20代币发放。
          </p>
          <p class="more">
            <a class="btn" href="https://zh.wikipedia.org/wiki/Blockchain" >
              <img src="../../assets/pc/home/btn-icon2.png" alt="" class="btn-icon2">
              <span>点此了解区块链</span>
            </a>
            <a class="btn" href="https://www.ethereum.org/" >
              <img src="../../assets/pc/home/btn-icon3.png" alt="" class="btn-icon3">
              <span>点此了解以太坊</span>
            </a>
          </p>
        </section>
      </section>

      <section class="block-item block3">
        <section class="block-text">
          <p class="tips">
            <span class="border-left"></span>
            <span>音乐价格</span>
            <span class="border-right"></span>
          </p>
          <p class="title">全球独创的证券化音乐估值体系</p>
          <img src="../../assets/pc/home/block3.png" class="block-img" alt="">
          <p class="des">
            在音乐生活，歌曲的价值不再依托于版权价格，而是基于MitCoin (MITC)数字货币的证券化估值体系。我们将根据每首歌的真实收听量、收听深度、收听活跃度来计算歌曲的收听价格与市值。从而打破现有版权行业价格不透明、播放数据造假、头部版权垄断市场等局面。让每首歌都能被公平公正地定价、估值并以合理价格进行快速交易。
          </p>
        </section>
      </section>

      <section class="block-item block4 block-bg">
        <section class="block-text">
          <p class="tips">
            <span class="border-left"></span>
            <span>硬件定价 </span>
            <span class="border-right"></span>
          </p>
          <p class="title">通过音频播放类硬件为音乐定价</p>
          <img src="../../assets/pc/home/block4.png" class="block-img" alt="">
          <p class="des">
            由于音乐定价至关重要，音乐生活需要确保播放数据是可信的且无法造假。因此，我们采取嵌入式代码接入硬件的方案，
            来计算每一次的音乐播放量。任何音乐播放类硬件，只要能确保音乐是由唯一真实的人类收听，都可以接入音乐生活系统。
            由此，我们能确保音乐生活的播放量定价是由绝对真实的个人收集而来，音乐生活也将对提供播放数据的用户支付报酬，
            即用户使用接入生态的硬件听歌即可挣取相应的MitCoin。首个接入音乐生活的硬件为MusicLens乐透音乐眼镜
          </p>
          <p class="more">
            <a class="btn" href="http://www.music-lens.com/" >
              <img src="../../assets/pc/home/btn-icon2.png" alt="" class="btn-icon2">
              <span>点此了解MusicLens乐透音乐眼镜</span>
            </a>
            <a class="btn" @click="goWrite" >
              <img src="../../assets/pc/home/btn-icon4.png" alt="" class="btn-icon4">
              <span>申请新硬件接入</span>
            </a>
          </p>
        </section>
      </section>


      <section class="block-item block5">
        <section class="block-text">
          <p class="tips">
            <span class="border-left"></span>
            <span>软件分销</span>
            <span class="border-right"></span>
          </p>
          <p class="title">通过SDK接入音乐软件进行分销</p>
          <p class="des">
            <span>
              音乐生活将研发集成SDK接入音乐播放类软件，并通过音乐软件分销在音乐生活销售的音乐。
              在接入的音乐软件中产生的每次付费将与软件分成。接入音乐生活SDK是免费的，
              任何通过审核的音乐软件，都可以接入并成为我们的分销商，共同建立一个互惠互赢的音乐生态。
              首个接入音乐生活SDK的音乐软件为echo回声APP。
            </span>
          </p>
          <div class="other">
            <img src="../../assets/pc/home/block5.png"  alt="phone" class="phone">
            <p class="more">
              <img src="../../assets/pc/home/block5-logo.png"  alt="phone" class="logo">
              <span class="logo-tips">
                echo回声是一款专为年轻人打造的潮流音乐APP，提供新颖的音乐收听与媒体服务，在全球拥有3000万用户。作为首个接入MusicLife的软件，您可以在echo粉丝群通过签到中获得MITC，并在echo生态中消费MITC。
              </span>
              <!-- <span class="down-tips">
                手机应用市场搜索“echo回声”下载
              </span> -->
            </p>
          </div>
          <a class="btn" href="http://www.app-echo.com/index/download" >
            <img src="../../assets/pc/home/btn-icon5.png" alt="" class="btn-icon5">
            <span>点此下载echo回声APP</span>
          </a>
          <a class="btn" @click="goWrite" >
            <img src="../../assets/pc/home/btn-icon6.png" alt="" class="btn-icon6">
            <span>申请新软件接入</span>
          </a>
        </section>
      </section>

      <section class="block-item block6 block-bg">
        <section class="block-text">
          <p class="tips">
            <span class="border-left"></span>
            <span>音乐人与唱片公司 </span>
            <span class="border-right"></span>
          </p>
          <p class="title">开放自由的音乐授权体系</p>
          <img src="../../assets/pc/home/block6.png" class="block-img" alt="">
          <p class="des">
            任何一位音乐人或唱片公司，都可以把音乐授权给音乐生活进行分销。接入音乐生活，意味着选择一种全新的音乐估值体系，
            摒弃现有的版权价值体系。每首加入音乐生活的音乐，都将由MusicLife Foundation进行书面公证将版权转为非盈利基金会运营的公版音乐，
            并开始在MitCoin数字货币体系中根据用户的收听数据重新进行证券化估值。这意味着，任何人获得基金会授权的机构或个人
            ，都可以通过指定方式免费传播、分享您的作品。而基于新的估值体系，您的歌曲被收听的数据越多，您的歌曲估值越高，
            从而您的音乐也将通过播放量获得合理的收益。这是音乐数字化以来，整个音乐产业梦寐以求的商业化模式，
            而在区块链的体系中，第一次有希望得以实现。现在就加入音乐生活，加入音乐革命的新浪潮！
          </p>
          <!-- 提交按钮先隐藏 -->
          <!-- <p class="more">
            <a class="btn" href="http://www.music-lens.com/" >
              <img src="../../assets/pc/home/btn-icon7.png" alt="" class="btn-icon7">
              <span>提交音乐作品并接入音乐生活</span>
            </a>
          </p> -->
        </section>
      </section>

      <section class="block-item block7">
        <section class="block-text">
          <p class="tips">
            <span class="border-left"></span>
            <span>音乐交易所 </span>
            <span class="border-right"></span>
          </p>
          <p class="title">全球首个AI定价的音乐交易所</p>
          <img src="../../assets/pc/home/block7.png" class="block-img" alt="">
          <p class="des">
            在音乐生活，人们通过音乐获得收益的方式不是买卖音乐版权，而是买卖音乐的虚拟分红权，也就是“股权”。
            用户可以通过付费播放音乐的方式自动购买音乐的股权，但若需要进行大量音乐股权的交易，则需要通过音乐生活的交易所来进行买卖。
            音乐生活的音乐交易所采用独创的AI定价方式，音乐交易价格由AI基于当前音乐播放数据计算的估值来自动定价。
            用户可以根据当前价格进行买卖。所有的买方需求将以挂单及推送通知的形式发送给所有股东。
            音乐生活将研发配套的交易所网页、移动端软件以支持音乐交易。
          </p>
        </section>
      </section>
      <section class='team-part'>
          <img class='block' src="../../assets/mobile/footNav/team-pro.jpg" alt="">
          <img class='block' src="../../assets/mobile/footNav/p0.jpg" alt="">
          <div class="box">
            <img @click='teamLeft' class='left-btn' src="../../assets/mobile/footNav/left-btn.png" alt="">
            <img @click='teamRight' class='right-btn' src="../../assets/mobile/footNav/right-btn.png" alt="">

            <transition :name='transition_name'>
              <div class="person" v-for='(x, index) in team_list' v-if='team_index == index'>
                <img class='avatar' :src="x.avatar" alt="">
                <p class='name'>{{x.name}}</p>
                <p class='position'>{{x.pos}}</p>
                <p class='bar'></p>
                <p class='des'>{{x.des}}
                  <span v-if='index == 0'>查看更多 <img src="../../assets/mobile/footNav/right-angle.png" alt=""> </span>
                </p>
              </div>
            </transition>

          </div>

          <img class='block' src="../../assets/mobile/footNav/p1.jpg" alt="">
          <img class='block' src="../../assets/mobile/footNav/p2.jpg" alt="">
          <img class='block' src="../../assets/mobile/footNav/p3.jpg" alt="">
      </section>
    </section>

    <footer>
     <section class="content">
        <img src="../../assets/pc/home/foot-logo.png" alt="" class="foot-logo">
        <p class="tips">
          <img src="../../assets/pc/home/footer.png" alt="" class="foot-img">
          <span>公平的下一代音乐价值体系 </span>
        </p>
        <p class="contact-us">
          联系我们 <a href="mailto:EMAIL">info@musiclife.io</a>
        </p>
        <section class="group">
          <section class="group-list">
            <a href="https://t.me/musiclifeblockchain2"  class="group-item">
              <img src="../../assets/pc/home/icon1.png" alt="telegram">
            </a>
            <a href="http://www.app-echo.com/#/group/31503"  class="group-item">
              <img src="../../assets/pc/home/icon2.png" alt="echo">
            </a>
            <a href="https://twitter.com/musiclife_mitc"  class="group-item">
              <img src="../../assets/pc/home/icon3.png" alt="twitter">
            </a>
            <a href="https://www.facebook.com/musiclife.block"  class="group-item">
              <img src="../../assets/pc/home/icon4.png" alt="facebook">
            </a>
          </section>
        </section>
        <p class="copyright">© 2018 MusicLife Foundation</p>
     </section>
    </footer>

    <!-- 语言切换 -->
    <!-- <section class="select-language" @click="chooseLans">
      <section class="choose-language">
        <span>{{ language[chooseLanguage].name }}</span>
        <img src="../../assets/pc/home/l-icon2.png" alt="" class="drop">
      </section>
    </section> -->

    <!-- 弹窗model -->
    <transition name="fade" v-if="showLan">
      <section class="model" @click="showLan = !showLan">
        <section class="lang-list">
          <section class="lang-item" v-for="item in language" :key="item.id">
            <router-link :to="item.href">{{ item.name }}</router-link>
          </section>
        </section>
      </section>
    </transition>

    <!-- 填写信息 -->
    <transition name="fase">
      <section class="model2" v-if="write">
        <span class="close">
          <img src="../../assets/pc/home/close.png" alt="" @click="closeWrite">
        </span>
        <section v-if="!writeSuccess" class="write-box">
          <section class="loading-img" v-show="writeLoading">
            <img src="../../assets/pc/home/s-loading.png" alt=""  >
          </section>
          <img src="../../assets/pc/home/logo.png" alt="" class="model-logo">
          <p class="model-title">Musiclife</p>
          <label class="input-item">
            <input type="text" v-model.trim="user.name" placeholder="请输入姓名">
          </label>
          <label class="input-item">
            <input type="text" v-model.trim="user.email" placeholder="请输入邮箱">
          </label>
          <label class="input-item">
            <select v-model="user.title" placeholder="请选择您的留言需求" :class="[user.title ? '' : 'no-choose']">
              <option disabled value="">请选择您的留言需求</option>
              <option  v-for="item in titles" :key="item.value" :value="item.value">{{ item.value }}</option>
            </select>
            <i class="icon-r el-icon-arrow-right"></i>
            <!-- <el-select v-model="user.title" placeholder="请选择您的留言需求" value-key="id">
              <el-option
                v-for="item in titles"
                :key="item.value"
                :label="item.value"
                :value="item.value">
              </el-option>
            </el-select> -->
          </label>
          <label class="input-item">
            <textarea v-model="user.content" placeholder="请输入留言内容，收到的留言会在24小时内回复"></textarea>
          </label>
          <el-button :loading="writeLoading" type="primary" class="submit" @click="checkoutSubmit">提交信息</el-button>
        </section>

        <section v-else class="success-box">
          <section class="row">
            <img src="../../assets/pc/home/success.png" class="success-img" alt="">
          </section>
           <section class="row">
            <p class="title">信息提交成功，感谢您的支持！</p>
          </section>
          <section class="row">
            <p>您的个人信息提交成功后，我们会在24小时内以邮件的形式进行回复，请注意查收</p>
            <p>您也可以关注我们的Instagram，echo回声，Facebook或Twitter来获取最新消息</p>
          </section>
          <section class="group-list">
            <a href="https://t.me/musiclifeblockchain2" target="_blank" class="group-item">
              <img src="../../assets/pc/home/icon1.png" alt="telegram">
            </a>
            <a href="http://www.app-echo.com/#/group/31503" target="_blank" class="group-item">
              <img src="../../assets/pc/home/icon2.png" alt="echo">
            </a>
            <a href="https://twitter.com/musiclife_mitc" target="_blank" class="group-item">
              <img src="../../assets/pc/home/icon3.png" alt="twitter">
            </a>
            <a href="https://www.facebook.com/musiclife.block" target="_blank" class="group-item">
              <img src="../../assets/pc/home/icon4.png" alt="facebook">
            </a>
          </section>
        </section>

      </section>
    </transition>
    <foot-nav :tabIndex='2' ></foot-nav>
  </main>
</template>

<script>
import footNav from './components/footNav'
export default {
  name: 'home',
  data () {
    return {
      is_login: false,
      team_list: [
         {avatar: require('../../assets/mobile/footNav/avatar1.png'), name: 'Kaiming Liu', pos: '创始人兼董事长', des: '联合国商业与人权公约起草人之一、欧盟委员会中欧合作战略顾问、世界经济论坛全球议程理事，全球可持续电信行业协会（GeSI)人权委员会理事。曾将SA8000社会责任标准引入中国，在全球公益与非营利领域有极高的知名度。1997年毕业于南京大学，获博士学位。MusicLife基金会发起人与董事长。'},
         {avatar: require('../../assets/mobile/footNav/avatar2.png'), name: 'Kevin Edwards-Yano', pos: '首席执行官', des: '英国资深特许会计师，连续运作日本金融服务集团逾十年。工作前三年，在英国就职于四大会计事务所为金融机构做审计，并获得英国特许会计师的资格。而后移居日本，并在日本金融与审计领域深耕，有着丰富的跨境金融、跨境经营管理经验。作为MusicLife的首席执行官，负责MusicLife全球管理与跨境金融'},
         {avatar: require('../../assets/mobile/footNav/avatar3.png'), name: '石锐', pos: '首席技术官', des: '中国科学院计算机硕士，同济大学学士。曾任淘宝广告高级产品经理，阿里巴巴应用基础平台高级研发工程师、DT实验室数据工程师，负责参与淘宝直通车、钻石展位BP系统；任MusicLife首席技术官，负责MusicLife互联网软件产品线、移动端嵌入式SDK系统、硬件嵌入式系统的全局研发统筹工作。'},
         {avatar: require('../../assets/mobile/footNav/avatar4.png'), name: '乾由布子', pos: '全球法律顾问', des: '奥睿律师事务所东京办公室高级法律顾问，能源基建集团成员，日本辩护士联合会环境保护委员会成员。本科及研究生都毕业于东京大学，目前主要负责可再生能源项目、不动产交易以及知识产权类的法律咨询与案例。曾就职于日本银行国际合作部。担任MusicLife的法律顾问，负责MusicLife的全球法律合规。'},
         {avatar: require('../../assets/mobile/footNav/avatar5.png'), name: '刘莙怡', pos: '音乐科技产业顾问', des: '美国哥伦比亚艺术学院本科专攻游戏设计，辅修网络编程。启维文化集团董事长，2014年创立echo回声音乐App且实现高速增长，用户量达到3000万。2016年入选福布斯亚洲30位30岁以下企业家。2017年带领团队发明“乐透”-可以听歌的潮流眼镜。担任MusicLife的互联网音乐产业顾问，负责音乐产业资源对接。'},
         {avatar: require('../../assets/mobile/footNav/avatar6.png'), name: '洪义隽', pos: '区块链技术顾问', des: '上海大学通讯与技术学士，启维文化集团首席技术官。曾任职于中科院、IBM、TNC并担任技术总监，有着长达15年以上的开发管理经验，参与并负责多个中大型项目。长期负责大型视频、通讯项目，擅长集群构架与安全防御，在内容推荐与算法挖掘上有深度研究。担任MusicLife的互联网区块链技术顾问。'},
      ],
      dash: 0,
      team_index: 0,
      chooseLanguage: 0,
      showLan: false,
      transition_name: 'right-in',
      top: 0,
      language: [
        {
          id: 1,
          name: '中文',
          href: '/zh'
        },
        {
          id: 2,
          name: 'English',
          href: '/en'
        }
      ],
      write: false,
      writeLoading: false,
      writeSuccess: false,
      user: {
        name: '',
        email: '',
        content: '',
        title: ''
      },
      titles: [
        {
          id: 1,
          value: '商业合作'
        },
        {
          id: 2,
          value: '问题咨询'
        },
        {
          id: 3,
          value: '其他'
        }
      ]
    }
  },
  watch: {
    showLan (val) {
      this.isScroll(val)
    },

    write (val) {
      this.isScroll(val)
      if (!val) {
        this.user = {
          name: '',
          email: '',
          content: '',
          title: ''
        }
        this.writeLoading = false
        this.writeSuccess = false
      }
    }
  },
  computed: {
  },
  components: {
    footNav
  },
  methods: {
    teamLeft() {
      this.transition_name = 'right-in'
      setTimeout(() => {
        if (this.team_index >= 99) {
          setTimeout(() => {
            this.transition_name = 'left-in'
            this.team_index = this.dash + 1
            if (this.team_index > 5) {
              this.team_index = 0
            }
          }, 300)
        } else {
          this.transition_name = 'right-in'
          this.dash = this.team_index
          this.team_index = 100
          setTimeout(() => {
            this.transition_name = 'left-in'
            this.team_index = this.dash + 1
            if (this.team_index > 5) {
              this.team_index = 0
            }
          }, 300)
        }
        setTimeout(() => {
          this.transition_name = 'right-in'
        }, 300)
      })
    },
    teamRight() {
      this.transition_name = 'left-in'
      setTimeout(() => {
        if (this.team_index >= 99) {
          setTimeout(() => {
            this.transition_name = 'right-in'
            this.team_index = this.dash - 1
            if (this.team_index < 0) {
              this.team_index = 5
            }
          }, 300)
        } else {
          this.transition_name = 'left-in'
          this.dash = this.team_index
          this.team_index = 100
          setTimeout(() => {
            this.transition_name = 'right-in'
            this.team_index = this.dash - 1
            if (this.team_index < 0) {
              this.team_index = 5
            }
          }, 300)
        }
        setTimeout(() => {
          this.transition_name = 'left-in'
        },300)
      })

    },
    goWrite () {
      this.write = true
    },

    closeWrite () {
      this.write = false
    },

    chooseLans () {
      this.showLan = true
    },

    isScroll (val) {
      // 同时需要存入当前滚动条的高度 然后关闭的时候滚动回来
      if (val) {
        this.top = window.scrollY
        document.body.style.overflow = 'hidden'
        document.documentElement.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
        document.documentElement.style.overflow = ''
        if (this.top > 0) {
          this.$nextTick(() => {
            window.scrollTo(0, this.top)
          })
        }
      }
    },
    getInfo () {
      this.$http.get('/api/user/info', {
      }).then((res) => {
        if (res.body.code == 10401) {
          this.is_login = false
        } else {
          this.is_login = true
        }
      }).catch((e) => {
        console.log(e)
      })
    },
    checkoutSubmit () {
      if (this.user.name.length === 0) {
        this.msg('请输入姓名')
        return false
      }

      let emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (this.user.email.length === 0) {
        this.msg('请输入的邮箱')
        return false
      }

      if (!emailReg.test(this.user.email)) {
        this.msg('请输入正确的邮箱')
        return false
      }

      if (this.user.title === '') {
        this.msg('请选择您的留言需求')
        return false
      }

      if (this.user.content === 0) {
        this.msg('请输入您的留言')
        return false
      }

      this.submit()
    },

    submit () {
      this.writeLoading = true
      var d = {
        name: this.user.name,
        email: this.user.email,
        title: this.user.title,
        content: this.user.content
      }
      console.log(d)
      this.$http.post('api/index/visitor-new', d, {
        emulateJSON: true
      }).then((res) => {
        var data = res.body
        this.writeLoading = false
        if (~~data.code !== 0) {
          this.msg(data.msg)
        } else {
          this.msg('提交成功', 'success')
          this.writeSuccess = true
        }
        this.writeLoading = false
      }).catch((e) => {
        console.log(e)
        this.msg('提交失败')
        this.writeLoading = false
      })
    },

    msg (value, type, duration) {
      this.$vux.toast.show({
        position: 'middle',
        text: value || '',
        type: 'text',
        time: duration || 1500
      })
    }
  },
  mounted () {
    // 移动端active效果
    document.body.addEventListener('touchstart', function () { })
    this.getInfo()
  },
  destroyed () {
    this.isScroll(false)
  }
}
</script>

<style lang="scss" scoped>
  .left-in-enter-active, .left-in-leave-active {
    transition: all 0.5s;
  }

  .left-in-enter, .left-in-leave-active {
    opacity: 0;
    transform: translate(80%, 0);
  }
  .right-in-enter-active, .right-in-leave-active {
    transition: all 0.5s;
  }

  .right-in-enter, .right-in-leave-active {
    opacity: 0;
    transform: translate(-80%, 0);
  }
  .team-part {
    .box {
      position: relative;
      height: 9rem;
      background: #fff;
      .right-btn {
        position: absolute;
        right: 0.5rem;
        top: 2rem;
        height: 1rem;
      }
      .left-btn {
        position: absolute;
        left: 0.5rem;
        top: 2rem;
        height: 1rem;
      }
      .person {
        width: 70%;
        margin: 0 auto;
        font-size: 0.3rem;
        text-align: center;
        .avatar {
          width: 40%;
        }
        .name {
          font-size: 0.5rem;
        }
        .position {
          font-size: 0.35rem;
        }
        .bar {
          width: 30%;
          height: 0.1rem;
          background: linear-gradient(left, #5281FF, #7BFFE0);
          border-radius: 0.2rem;
          margin: 0.2rem auto 0;
        }
        .des {
          width: 92%;
          font-size: 0.3rem;
          margin: 0 auto;
          text-align: left;
          margin-top: 0.5rem;
          span {
            color: #5281FF;
            text-align: right;
            display: inline-block;
            margin-left: -0.2rem;
            img {
              width: 0.2rem;
              vertical-align: middle;
              margin-left: -0.1rem;
              margin-top: -0.1rem;
            }
          }
        }
      }
    }
    .block {
      display: block;
      width: 100%;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }
  }
  a {
    text-decoration: none;
    -webkit-tap-highlight-color:transparent;
  }

  main {
    width: 100%;
    overflow-x: hidden;
  }

  header {
    width: 100%;
    height: 160vw;
    background-color: #000332;
    background: url('../../assets/pc/home/phone/bg.jpg') center;
    background-size: cover;
    color: white;
    background-repeat: no-repeat;

    .content {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: auto;

      .logo {
        margin-top: 35px;
        width: 50px;
        align-self: flex-start;
      }

      .des {
        margin-top: 20px;
        width: 100%;
        text-align: center;
        font-size: 13px;
        line-height: 24px;

        p {
          opacity: .8;
        }

        .title {
          line-height: 23px;
          font-size: 14px;
          opacity: 1;
        }
      }

      .btn {
        display: block;
        margin-top: 30px;
        width: 110px;
        line-height: 40px;
        background: #3D6CE2;
        text-align: center;
        border-radius: 2px;
        font-size: 14px;
        transition: opacity .2s ease-out;
        margin-bottom: 10px;
        color: #fff;

        &:active {
          opacity: .8;
        }
      }
    }
  }

  .block-item {
    display: flex;
    margin: 0 auto 20px auto;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.4rem;
    text-align: center;

    .block-img {
      display: block;
      margin: 25px auto 14px auto;
      width: 130px;
      align-self: flex-start;
    }

    .block-text {
      color: #0033AC;

      .tips {
        display: flex;
        justify-content: center;
        font-size: 13px;
        line-height: 22px;
        align-items: center;

        .border-left {
          width: 30px;
          height: 1px;
          background-color: #0033AC;
          margin-right: 15px;
        }

        .border-right {
          width: 30px;
          height: 1px;
          background-color: #0033AC;
          margin-left: 15px;
        }
      }

      .title {
        font-size: 18px;
        line-height: 45px;
      }

      .des {
        text-align: center;
        font-size: 14px;
        line-height: 24px;
      }

      .more {
        margin-top: 20px;

      }
    }
  }
  .btn {
    // display: flex;
    display: block;
    align-items: center;
    width: 60%;
    color: #0033AC;
    font-size: 0.35rem;
    border: 1px solid #719BFF;
    border-radius: 1rem;
    padding: 0 0.25rem;
    cursor: pointer;
    transition: background-color .2s ease-out;
    margin: 10px auto;
    text-align: center;

    span {
      display: inline-block;
      text-align: center;
      line-height: 1rem;
      height: 1rem;
    }

    img {
      width: 18px;
      height: auto;
      vertical-align: middle;
      align-self: center;
      margin-right: 0.1rem;
    }

    .btn-icon2 {
      width: 27px;
    }

    .btn-icon3 {
      width: 16px;
      margin-right: 20px;
    }

    .btn-icon4 {
      width: 18px;
    }

    .btn-icon5 {
      width: 25px;
    }

    .btn-icon6 {
      width: 18px;
    }

    &:active {
      background-color: #719BFF;
      color: white;
    }
  }
  .block-bg {
    background-color: #F8F8F8;
  }

  .block2 {
    .block-img {
      width: 260px;
      margin-top: 0px;
    }

    .block-text {
      .more {
        .btn {
          width: 206px;
          padding:  0 20px;

        }
      }
    }
  }

  .block3 {
    .block-img {
      width: 257px;
      margin-top: 0;
    }
  }

  .block4 {
    .block-img {
      width: 260px;
      margin-top: 0px;
    }
    .block-text {

      .more {
        .btn {
          width: 340px;

          &:last-child {
            width: 196px;
          }
        }
      }
    }
  }

  .block5 {
    .block-img {
      width: 171px;
      align-self: center;
      margin-bottom: 27px;
    }
    .block-text {
      margin-left: 0;

      .other {
        display: flex;
        margin-top: 20px;
        justify-content: space-between;

        .phone {
          width: 40%;
          align-self: flex-start;
        }
      }

      .des {
        display: flex;
        align-items: center;
      }

      .more {
        width: 65%;
        text-align: center;
        margin-top: 0;
        .logo {
          display: inline-block;
          width: 140px;
          margin-top: 0;
        }

        .logo-tips {
          display: inline-block;
          text-align: left;
          width: 65%;
          font-size: 12px;
          line-height: 20px;
          color: #666666;
          margin-top: 10px;
        }

        .down-tips {
          display: block;
          margin-top: 30px;
          font-size: 13px;
        }

        .btn {
          margin: 10px 0;
          font-size: 12px;
          width: 193px;
          line-height: 35px;
          height: 35px;

          &:last-child {
            width: 146px;
          }
        }
      }
    }
  }

  .block6 {
    .block-img {
      width: 256px;
    }
  }

  .block7 {
    .block-img {
      width: 256px;
    }
  }

  footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    background-color: #000332;

    .content {
      width: 100%;
      height: auto;
      color: white;
      text-align: center;
    }

    .foot-logo {
      margin-top: 1.1rem;
      width: 5.775rem;
      align-self: flex-start;
      margin-bottom: 0.375rem;
    }

    .tips {
      display: flex;
      font-size: 16px;
      line-height: 22px;
      align-items: center;
      justify-content: center;
      span {
        font-size: 0.45rem;
        width: 2.725rem;
        margin-left: .45rem;
      }
    }

    .foot-img {
      width: 2.5rem;

    }

    .contact-us {
      position: relative;
      font-size: .35rem;
      line-height: 1.1rem;
      margin-top: .5rem;

      a {
        color: #58B0FF;
      }

      &::before, &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: linear-gradient(to left, rgba(125, 184, 237, 0), rgba(125, 184, 237, 1) 50%, rgba(125, 184, 237, 1) 50%,rgba(125, 184, 237, 0) 100%);
      }

      &::after {
        top: auto;
        bottom: 0;
      }
    }

    .group {
      width: 7rem;
      margin: auto;
      padding-bottom: .65rem;

      .group-list {
        margin-top: .7rem;
        display: flex;
        justify-content: space-between;

        .group-item {
          transition: opacity .2s ease-out;
          img {
            width: 1.2rem;
          }

          &:active {
            opacity: .8;
          }
        }
      }
    }

    .copyright {
      font-size: .35rem;
      margin-bottom: .6rem;
    }
  }

  .select-language {
    position: absolute;
    right: 16px;
    top: 20px;
    color: white;
    height: 33px;
    font-size: 12px;

    .choose-language {
      padding-left: 10px;
      width: 70px;
      height: 33px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      cursor: pointer;
      opacity: .5;
      transition: all .2s ease-out;
      border-radius: 20px;
      border: 1px solid rgba($color: #ffffff, $alpha: .35);


      .drop {
        width: 8px;
        margin-right: 10px;
        transition: all .2s ease-out;

      }
    }
  }

  .model {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000332, $alpha: .8)
  }

  .lang-list {
    position: absolute;
    bottom: 0;
    width: 100%;

    .lang-item {
      display: block;
      width: 100%;
      text-align: center;
      line-height: 66px;
      font-size: 15px;
      background-color: #509AD8;
      border-top: 1px solid rgba($color: #ffffff, $alpha: .2);

      &:first-child {
        border-top: none;
      }

      a {
        display: block;
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .model2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #000332;
    z-index: 100;

    .close img {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 40px;
      opacity: .6;
      cursor: pointer;
      transition: opacity .2s ease-out;

      &:active {
        opacity: 1;
      }
    }

    .model-logo {
      display: block;
      margin: 10px auto;
      width: 50px;
    }

    .model-title {
      font-size: 14px;
      text-align: center;
    }
  }

  .write-box {
    width: 100%;
    position: relative;
    color: white;
    margin: 50px auto;
    height: auto;

    .title {
      font-size: 20px;
      text-align: center;
    }

    .input-item {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      margin: 5px auto 0 auto;

      p {
        width: 100%;
        padding-left: 16px;
      }

      input, textarea, select {
        width: 100%;
        line-height: 40px;
        height: 40px;
        font-size: 14px;
        margin-top: 10px;
        background: none;
        border: 1px solid rgba($color: #ffffff, $alpha: .2);
        border-radius: 4px;
        padding: 0 16px;
        outline: none;
        transition:  all .3s ease-out;
        color: white;

        & + i {
          position: absolute;
          font-size: .4rem;
          right: .2rem;
          top: 20px;
        }

        &.no-choose {
          opacity: .5;
        }

        &.no-choose + i{
          opacity: .5;
        }


        &:focus {
          border: 1px solid rgba($color: #ffffff, $alpha: .8);
        }

        &::-webkit-input-placeholder {
          color: white;
          opacity: .5;
        }
      }

      textarea {
        line-height: 25px;
        padding-top: 10px;
        height: 130px;
        resize: none;
      }
    }

    .submit {
      display: block;
      margin: 30px auto;
      width: 300px;
      height: 44px;
      background-color: #3D6CE2;
      border-color: #3D6CE2;
    }
  }

  .loading-img img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 140px;
    transform: translate3d(-50%, -50%, 0);
  }

  .success-box {
    display: flex;
    flex-wrap: wrap;
    color: white;
    padding: 0 10%;

    p {
      font-size: 14px;
      opacity: .7;
    }

    .success-img {
      width: 73px;
      align-self: center;
      margin-top: 100px;
    }

    .title {
      font-size: 20px;
      margin-top: 20px;
      margin-bottom: 30px;
      opacity: 1;
    }

    .row {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      p {
        width: 100%;
        text-align: center;
        margin-top: 20px;
      }
    }

    .group-list {
      display: flex;
      justify-content: space-around;
      width: 380px;
      margin: 90px auto;

      img {
        width: 50px;
      }
    }
  }
</style>

<style lang="scss">

  .input-item .el-select {
    width: 100%;
    margin-top: 10px;
    color: white;

    .el-input__inner {
      color: white;
      opacity: 1;
      background: none;
      border: 1px solid rgba($color: #ffffff, $alpha: .2);

      &::-webkit-input-placeholder {
        color: white;
        opacity: .5;
      }

      &:focus {
        border: 1px solid rgba($color: #ffffff, $alpha: .8);
      }
    }
  }
</style>
