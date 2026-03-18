export type AnnouncementType = 'info' | 'warning' | 'success' | 'error' | 'notice' | 'update' | 'event' | 'important' | 'casual'

export interface Announcement {
  id: string
  version: number
  title: string
  content: string
  confirmText: string
  type: AnnouncementType
  createdAt: string
  isActive: boolean
}

export const announcements: Announcement[] = [
  {
    id: 'announcement-1',
    version: 1,
    title: '全站公告',
    content: '欢迎访问我们的网站！我们最近更新了网站功能，添加了留言板和美化了标签页面。感谢您的支持！',
    confirmText: '我知道了',
    type: 'info',
    createdAt: '2024-01-01',
    isActive: false,
  },
  {
    id: 'announcement-2',
    version: 2,
    title: '功能更新',
    content: '我们刚刚添加了历史公告功能，您可以在公告页面查看所有历史公告。',
    confirmText: '了解了',
    type: 'warning',
    createdAt: '2024-01-02',
    isActive: false,
  },
  {
    id: 'announcement-3',
    version: 3,
    title: '功能优化',
    content: '我们刚刚优化了公告功能，您可以体验所有有关更新，我们也很期待您能在留言板上留下您的宝贵意见。',
    confirmText: '我知道了',
    type: 'success',
    createdAt: '2024-01-03',
    isActive: true,
  },
  {
    id: 'announcement-4',
    version: 4,
    title: '全站通告',
    content: '我们最近频繁更新了网站功能，可能会影响您的正常使用。请及时查看并确认。',
    confirmText: '我知道了',
    type: 'error',
    createdAt: '2024-01-04',
    isActive: true,
  },
  {
    id: 'announcement-5',
    version: 5,
    title: '全站公告',
    content: '欢迎访问我们的网站！我们最近更新了网站功能，添加了留言板和美化了标签页面。感谢您的支持！',
    confirmText: '我知道了',
    type: 'notice',
    createdAt: '2024-01-01',
    isActive: false,
  },
  {
    id: 'announcement-6',
    version: 6,
    title: '功能更新',
    content: '我们刚刚添加了历史公告功能，您可以在公告页面查看所有历史公告。',
    confirmText: '了解了',
    type: 'update',
    createdAt: '2024-01-02',
    isActive: false,
  },
  {
    id: 'announcement-7',
    version: 8,
    title: '功能优化',
    content: '我们刚刚优化了公告功能，您可以体验所有有关更新，我们也很期待您能在留言板上留下您的宝贵意见。',
    confirmText: '我知道了',
    type: 'event',
    createdAt: '2024-01-03',
    isActive: true,
  },
  {
    id: 'announcement-9',
    version: 9,
    title: '全站通告',
    content: '我们最近频繁更新了网站功能，可能会影响您的正常使用。请及时查看并确认。',
    confirmText: '我知道了',
    type: 'important',
    createdAt: '2024-01-04',
    isActive: true,
  },
  {
    id: 'announcement-10',
    version: 10,
    title: '全站通告',
    content: '我们最近频繁更新了网站功能，可能会影响您的正常使用。请及时查看并确认。',
    confirmText: '我知道了',
    type: 'casual',
    createdAt: '2024-01-04',
    isActive: true,
  },
]

export function getActiveAnnouncements(): Announcement[] {
  return announcements.filter(announcement => announcement.isActive)
}

export function getAllAnnouncements(): Announcement[] {
  return [...announcements].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })
}
