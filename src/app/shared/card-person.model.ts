export class InfoPerson {
    constructor(public user_id :number,
        public turma_id: number,
        public user_name: string,
        public user_email: string,
        public email2: string,
        public sexo: number,
        public user_senha: string,
        public user_telefone: string,
        public user_endereco: string,
		public data_nasc: string,
		public formacao: string,
		public localformacao: string,
		public anoformacao: number,
		public local_trabalho: string,
		public end_local_trabalho: string ,
		public cdd_local_trabalho: string ,
		public est_local_trabalho: string ,
		public pais_local_trabalho: string ,
		public estudante: number,
		public local_estudo: string ,
		public cidade_estudo: string ,
		public estado_estudo: string ,
		public pais_estudo: string ,
		public lattes: string, 
		public instagram: string,
		public facebook: string,
		public linkedin: string,
		public foto: File
        ){
        
    }
}