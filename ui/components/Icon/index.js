import React from 'react'
import styled, { css } from 'styled-components'

import Add from '../../icons/add.svg'
import Attach from '../../icons/attach.svg'
import Activity from '../../icons/activity.svg'
import AddUser from '../../icons/add_user.svg'
import ArrowDown from '../../icons/arrow_down.svg'
import ArrowDown2 from '../../icons/arrow_down_2.svg'
import ArrowDown3 from '../../icons/arrow_down_3.svg'
import ArrowDownCircle from '../../icons/arrow_down_circle.svg'
import ArrowDownSquare from '../../icons/arrow_down_square.svg'
import ArrowLeft from '../../icons/arrow_left.svg'
import ArrowLeft2 from '../../icons/arrow_left_2.svg'
import ArrowLeft3 from '../../icons/arrow_left_3.svg'
import ArrowLeftCircle from '../../icons/arrow_left_circle.svg'
import ArrowLeftSquare from '../../icons/arrow_left_square.svg'
import ArrowRight from '../../icons/arrow_right.svg'
import ArrowRight2 from '../../icons/arrow_right_2.svg'
import ArrowRight3 from '../../icons/arrow_right_3.svg'
import ArrowRightCircle from '../../icons/arrow_right_circle.svg'
import ArrowRightSquare from '../../icons/arrow_right_square.svg'
import ArrowUp from '../../icons/arrow_up.svg'
import ArrowUp2 from '../../icons/arrow_up_2.svg'
import ArrowUp3 from '../../icons/arrow_up_3.svg'
import ArrowUpCircle from '../../icons/arrow_up_circle.svg'
import ArrowUpSquare from '../../icons/arrow_up_square.svg'
import Bag from '../../icons/bag.svg'
import Bag2 from '../../icons/bag_2.svg'
import Bookmark from '../../icons/bookmark.svg'
import Buy from '../../icons/buy.svg'
import Calendar from '../../icons/calendar.svg'
import Call from '../../icons/call.svg'
import CallMissed from '../../icons/call_missed.svg'
import CallSilent from '../../icons/call_silent.svg'
import Calling from '../../icons/calling.svg'
import Camera from '../../icons/camera.svg'
import Category from '../../icons/category.svg'
import Chart from '../../icons/chart.svg'
import Check from '../../icons/check.svg'
import Chat from '../../icons/chat.svg'
import CloseSqhare from '../../icons/close_square.svg'
import Danger from '../../icons/danger.svg'
import Delete from '../../icons/delete.svg'
import Discount from '../../icons/discount.svg'
import Discovery from '../../icons/discovery.svg'
import Document from '../../icons/document.svg'
import Download from '../../icons/download.svg'
import Edit from '../../icons/edit.svg'
import EditSquare from '../../icons/edit_square.svg'
import Facebook from '../../icons/facebook.svg'
import Filter from '../../icons/filter.svg'
import Filter2 from '../../icons/filter_2.svg'
import Folder from '../../icons/folder.svg'
import Flag from '../../icons/flag.svg'
import Game from '../../icons/game.svg'
import Graph from '../../icons/graph.svg'
import Google from '../../icons/google.svg'
import Heart from '../../icons/heart.svg'
import Hide from '../../icons/hide.svg'
import Home from '../../icons/home.svg'
import Image from '../../icons/image.svg'
import Image_2 from '../../icons/image_2.svg'
import InfoCircle from '../../icons/info_circle.svg'
import InfoSquare from '../../icons/info_square.svg'
import Location from '../../icons/location.svg'
import Lock from '../../icons/lock.svg'
import Login from '../../icons/login.svg'
import Logout from '../../icons/logout.svg'
import Menu from '../../icons/menu.svg'
import Message from '../../icons/message.svg'
import MoreCircle from '../../icons/more_circle.svg'
import MoreSquare from '../../icons/more_square.svg'
import Notification from '../../icons/notification.svg'
import Paper from '../../icons/paper.svg'
import PaperDownload from '../../icons/paper_download.svg'
import PaperFail from '../../icons/paper_fail.svg'
import PaperNegative from '../../icons/paper_negative.svg'
import PaperPlus from '../../icons/paper_plus.svg'
import PaperUpload from '../../icons/paper_upload.svg'
import Password from '../../icons/password.svg'
import Play from '../../icons/play.svg'
import Plus from '../../icons/plus.svg'
import Profile from '../../icons/profile.svg'
import Scan from '../../icons/scan.svg'
import Search from '../../icons/search.svg'
import Send from '../../icons/send.svg'
import Setting from '../../icons/setting.svg'
import ShieldDone from '../../icons/shield_done.svg'
import ShieldFail from '../../icons/shield_fail.svg'
import Show from '../../icons/show.svg'
import Star from '../../icons/star.svg'
import Swap from '../../icons/swap.svg'
import TickSquare from '../../icons/tick_square.svg'
import Ticket from '../../icons/ticket.svg'
import TicketStar from '../../icons/ticket_star.svg'
import TimeCircle from '../../icons/time_circle.svg'
import TimeSquare from '../../icons/time_square.svg'
import Unlock from '../../icons/unlock.svg'
import Upload from '../../icons/upload.svg'
import User from '../../icons/user.svg'
import User2 from '../../icons/user_2.svg'
import Video from '../../icons/video.svg'
import Voice from '../../icons/voice.svg'
import Voice2 from '../../icons/voice_2.svg'
import VolumeDown from '../../icons/volume_down.svg'
import VolumeOff from '../../icons/volume_off.svg'
import VlumeUp from '../../icons/volume_up.svg'
import Wallet from '../../icons/wallet.svg'
import Work from '../../icons/work.svg'

export const library = {
  add: Add,
  attach: Attach,
  activity: Activity,
  addUser: AddUser,
  arrowDown: ArrowDown,
  arrowDown2: ArrowDown2,
  arrowDown3: ArrowDown3,
  arrowDownCircle: ArrowDownCircle,
  arrowDownSquare: ArrowDownSquare,
  arrowLeft: ArrowLeft,
  arrowLeft2: ArrowLeft2,
  arrowLeft3: ArrowLeft3,
  arrowLeftCircle: ArrowLeftCircle,
  arrowLeftSquare: ArrowLeftSquare,
  arrowRight: ArrowRight,
  arrowRight2: ArrowRight2,
  arrowRight3: ArrowRight3,
  arrowRightCircle: ArrowRightCircle,
  arrowRightSquare: ArrowRightSquare,
  arrowUp: ArrowUp,
  arrowUp2: ArrowUp2,
  arrowUp3: ArrowUp3,
  arrowUpCircle: ArrowUpCircle,
  arrowUpSquare: ArrowUpSquare,
  bag: Bag,
  bag2: Bag2,
  bookmark: Bookmark,
  buy: Buy,
  calendar: Calendar,
  call: Call,
  callMissed: CallMissed,
  callSilent: CallSilent,
  calling: Calling,
  camera: Camera,
  category: Category,
  chart: Chart,
  check: Check,
  chat: Chat,
  closeSqhare: CloseSqhare,
  danger: Danger,
  delete: Delete,
  discount: Discount,
  discovery: Discovery,
  document: Document,
  download: Download,
  edit: Edit,
  editSquare: EditSquare,
  facebook: Facebook,
  filter: Filter,
  filter2: Filter2,
  folder: Folder,
  flag: Flag,
  game: Game,
  graph: Graph,
  google: Google,
  heart: Heart,
  hide: Hide,
  home: Home,
  image: Image,
  image_2: Image_2,
  infoCircle: InfoCircle,
  infoSquare: InfoSquare,
  location: Location,
  lock: Lock,
  login: Login,
  logout: Logout,
  menu: Menu,
  message: Message,
  moreCircle: MoreCircle,
  moreSquare: MoreSquare,
  notification: Notification,
  paper: Paper,
  paperDownload: PaperDownload,
  paperFail: PaperFail,
  paperNegative: PaperNegative,
  paperPlus: PaperPlus,
  paperUpload: PaperUpload,
  password: Password,
  play: Play,
  plus: Plus,
  profile: Profile,
  scan: Scan,
  search: Search,
  send: Send,
  setting: Setting,
  shieldDone: ShieldDone,
  shieldFail: ShieldFail,
  show: Show,
  star: Star,
  swap: Swap,
  tickSquare: TickSquare,
  ticket: Ticket,
  ticketStar: TicketStar,
  timeCircle: TimeCircle,
  timeSquare: TimeSquare,
  unlock: Unlock,
  upload: Upload,
  user: User,
  user2: User2,
  video: Video,
  voice: Voice,
  voice2: Voice2,
  volumeDown: VolumeDown,
  volumeOff: VolumeOff,
  vlumeUp: VlumeUp,
  wallet: Wallet,
  work: Work
}

export const Wrap = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 150ms ease;

  ${({ size }) =>
    size === 'xs' &&
    css`
      svg {
        transform: scale(0.65);
      }
    `}
  ${({ size }) =>
    size === 'x' &&
    css`
      svg {
        transform: scale(0.85);
      }
    `}
  ${({ size }) =>
    size === 'm' &&
    css`
      svg {
        transform: scale(1);
      }
    `}

  svg {
    path,
    circle,
    line,
    rect {
      transition: stroke 150ms ease;

      ${({ stroke }) =>
        stroke &&
        css`
          stroke: ${stroke};
        `}
      ${({ fill }) =>
        fill &&
        css`
          fill: ${fill};
        `}
    }
  }
`

export const Error = styled.p`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 0.65rem;
  border: 1px solid #dedede;
  border-radius: 0.25rem;
  color: red;

  ${({ width, height }) =>
    width &&
    height &&
    css`
      width: ${width}px;
      height: ${height}px;
    `}
`

export const Icon = ({ icon, size, ...props }) => {
  const IconSVG = library[icon]

  if (!IconSVG) {
    return <Error {...props}>Not Found</Error>
  }

  return (
    <Wrap {...props} icon={icon} size={size}>
      <IconSVG />
    </Wrap>
  )
}

Icon.defaultProps = {
  size: 'm',
  width: 20,
  height: 20,
  stroke: null,
  fill: null
}

export default Icon
