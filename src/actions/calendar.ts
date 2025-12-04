import type { CalendarEvent } from "@/lib/api/types"

const API_BASE = import.meta.env.VITE_API_URL || "/api"

// ============================================================================
// 类型定义
// ============================================================================

export interface ActionResult<T = void> {
  success: boolean
  data?: T
  error?: string
}

export interface CalendarEventFormData {
  title: string
  start: string
  end: string
  type?: "meeting" | "task" | "reminder" | "holiday"
  location?: string
  description?: string
  attendees?: string[]
  allDay?: boolean
}

export interface CalendarSearchParams {
  startDate?: string
  endDate?: string
  type?: string
}

// ============================================================================
// 辅助函数
// ============================================================================

function getToken(): string | null {
  return localStorage.getItem("token")
}

async function clientFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getToken()

  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
    ...options,
  })

  const data = await response.json()

  if (data.code !== 200 && data.code !== 0) {
    throw new Error(data.message || "请求失败")
  }

  return data.data
}

// ============================================================================
// 日历事件 Actions
// ============================================================================

/**
 * 获取日历事件列表
 */
export async function getCalendarEventsAction(
  params?: CalendarSearchParams
): Promise<ActionResult<CalendarEvent[]>> {
  try {
    const query = new URLSearchParams(
      Object.entries(params || {}).reduce(
        (acc, [key, value]) => {
          if (value !== undefined) acc[key] = String(value)
          return acc
        },
        {} as Record<string, string>
      )
    ).toString()

    const events = await clientFetch<CalendarEvent[]>(
      `/calendar/events${query ? `?${query}` : ""}`
    )

    return { success: true, data: events }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "获取日历事件失败",
    }
  }
}

/**
 * 获取单个事件
 */
export async function getCalendarEventAction(
  id: string
): Promise<ActionResult<CalendarEvent>> {
  try {
    const event = await clientFetch<CalendarEvent>(`/calendar/events/${id}`)
    return { success: true, data: event }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "获取事件失败",
    }
  }
}

/**
 * 创建日历事件
 */
export async function createCalendarEventAction(
  formData: CalendarEventFormData
): Promise<ActionResult<CalendarEvent>> {
  try {
    const event = await clientFetch<CalendarEvent>("/calendar/events", {
      method: "POST",
      body: JSON.stringify(formData),
    })

    return { success: true, data: event }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "创建事件失败",
    }
  }
}

/**
 * 更新日历事件
 */
export async function updateCalendarEventAction(
  id: string,
  formData: Partial<CalendarEventFormData>
): Promise<ActionResult<CalendarEvent>> {
  try {
    const event = await clientFetch<CalendarEvent>(`/calendar/events/${id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
    })

    return { success: true, data: event }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "更新事件失败",
    }
  }
}

/**
 * 删除日历事件
 */
export async function deleteCalendarEventAction(
  id: string
): Promise<ActionResult> {
  try {
    await clientFetch<void>(`/calendar/events/${id}`, {
      method: "DELETE",
    })

    return { success: true }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "删除事件失败",
    }
  }
}

/**
 * 批量删除事件
 */
export async function batchDeleteCalendarEventsAction(
  ids: string[]
): Promise<ActionResult> {
  try {
    await clientFetch<void>("/calendar/events/batch-delete", {
      method: "POST",
      body: JSON.stringify({ ids }),
    })

    return { success: true }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "批量删除失败",
    }
  }
}

/**
 * 添加参与者
 */
export async function addEventAttendeesAction(
  id: string,
  attendeeIds: string[]
): Promise<ActionResult<CalendarEvent>> {
  try {
    const event = await clientFetch<CalendarEvent>(
      `/calendar/events/${id}/attendees`,
      {
        method: "POST",
        body: JSON.stringify({ attendeeIds }),
      }
    )

    return { success: true, data: event }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "添加参与者失败",
    }
  }
}

/**
 * 移除参与者
 */
export async function removeEventAttendeeAction(
  id: string,
  attendeeId: string
): Promise<ActionResult<CalendarEvent>> {
  try {
    const event = await clientFetch<CalendarEvent>(
      `/calendar/events/${id}/attendees/${attendeeId}`,
      {
        method: "DELETE",
      }
    )

    return { success: true, data: event }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "移除参与者失败",
    }
  }
}

/**
 * 更新事件时间（拖拽调整）
 */
export async function rescheduleEventAction(
  id: string,
  start: string,
  end: string
): Promise<ActionResult<CalendarEvent>> {
  try {
    const event = await clientFetch<CalendarEvent>(
      `/calendar/events/${id}/reschedule`,
      {
        method: "PATCH",
        body: JSON.stringify({ start, end }),
      }
    )

    return { success: true, data: event }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "调整时间失败",
    }
  }
}
