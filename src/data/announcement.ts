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
  lang: string
}

export const announcements: Announcement[] = [
  {
    id: 'announcement-1',
    version: 1,
    title: '全站公告',
    content: '由于评论系统年久失修，我们已关闭评论功能。感谢您的理解！我们修复会尽快恢复评论功能。（换成Giscus，但是好像有点问题，先将就一下？）',
    confirmText: '我知道了',
    type: 'error',
    createdAt: '2026-03-20',
    isActive: false,
    lang: 'zh',
  },
  {
    id: 'announcement-2',
    version: 3,
    title: '全站公告',
    content: '将评论系统换成了Cisdus，大家可以帮忙测试一下，不过评论需要人工审核，大家稍等哦！（深色模式好像有点问题。。。所以我们下架了深/浅主题切换功能）',
    confirmText: '我知道了',
    type: 'success',
    createdAt: '2026-05-02',
    isActive: true,
    lang: 'zh',
  },
]

export function getActiveAnnouncements(lang: string = ''): Announcement[] {
  return announcements.filter(announcement =>
    announcement.isActive && (announcement.lang === lang || announcement.lang === ''),
  )
}

export function getAllAnnouncements(lang: string = ''): Announcement[] {
  return announcements
    .filter(announcement => announcement.lang === lang || announcement.lang === '')
    .sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    })
}
