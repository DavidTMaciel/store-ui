class HomeController {
    async fetchProducts() {
        try {
            const res = await fetch("/products.json")
            const text = await res.text()
            if (!text) throw new Error("Resposta vazia")

            return JSON.parse(text)
        } catch (error) {
            console.error("Erro ao buscar produtos:", error)
            return []
        }
    }
}

const homeController = new HomeController()

export {
    homeController
}