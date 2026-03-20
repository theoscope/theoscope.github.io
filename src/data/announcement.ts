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
