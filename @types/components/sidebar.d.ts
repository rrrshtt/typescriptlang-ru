interface LinkItem {
    id: string
    name: string
    link: string
  }
  interface ParentItem {
    id: string
    name: string
    items: MenuItem[] | null
  }

  type MenuItem = LinkItem | ParentItem

  type Query = { allSidebarJson: { edges: { node: MenuItem }[] } }
