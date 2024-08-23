import { createModel } from '@rematch/core'
import type { RootModel } from '../models'

type Project = {
  name: string
  url: string
  videoID: string
}

const initialState: Project[] = [
  {
    name: 'Cyber Threats',
    url: 'cyberthreats',
    videoID: 'skReel'
  },
  {
    name: 'Intrusion Detection and Analysis',
    url: 'intrusiondetection',
    videoID: 'aqReel'
  },
  {
    name: 'Netowork Intrusion Detection System',
    url: 'networkintrusion',
    videoID: 'fbReel'
  }
]

export const projects = createModel<RootModel>()({
  state: initialState
})
