class Emergency:
    def __init__(self, id, code, address, text, category):
        self.id = id
        self.code = code
        self.direccion = address
        self.text = text
        self.category = category

    def to_dict(self):
        return {
            'id': self.id,
            'code': self.code,
            'address': self.direccion,
            'text': self.text,
            'category': self.category
        }
