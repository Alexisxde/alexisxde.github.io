export interface Project {
	slug: string
	name: string
	description: string
	url?: string
	github: string
	image: string
	stack: Stack[]
}

export interface Stack {
	logo: string
	name: string
}
