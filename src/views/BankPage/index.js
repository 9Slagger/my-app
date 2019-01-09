import React, { Component } from 'react';
import { fetchBanks, deleteBank, fetchAccounts, editAccount } from '../../actions';
import { connect } from 'react-redux';

class BankPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			money: 0,
		};
	}

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	componentDidMount() {
		this.props.fetchBanks();
		this.props.fetchAccounts();
	}

	DeleteBank(value) {
		const banks1000 = this.props.banks.data.filter(bank => {
			return bank.price === 1000;
		});
		const banks500 = this.props.banks.data.filter(bank => {
			return bank.price === 500;
		});
		const banks100 = this.props.banks.data.filter(bank => {
			return bank.price === 100;
		});
		if (value >= 1000) {
			this.props.deleteBank(banks1000[0].id);
		}
		if (value >= 500) {
			this.props.deleteBank(banks500[0].id);
		}
		if (value >= 100) {
			this.props.deleteBank(banks100[0].id);
		}
	}

	async Deductions(money) {
        const data = await this.props.accounts.data.length && this.props.accounts.data[0].money - money
        this.props.editAccount(1, {money: data})
    }

	async Withdraw(money) {
		if (money >= 100 && money % 100 === 0) {
            let money_Int = await parseInt(money, 10);
            this.Deductions(money)
			while (money_Int >= 100) {
				if (money_Int >= 1000) {
					this.DeleteBank(1000);
					money_Int -= 1000;
				} else if (money_Int >= 500) {
					this.DeleteBank(500);
					money_Int -= 500;
				} else if (money_Int >= 100) {
					this.DeleteBank(100);
					money_Int -= 100;
				}
			}
		} else {
			alert('ไม่สามารถจ่ายเงินได้เนื่องจากกดเงินไม่ถูกต้อง');
        }
	}

	renderBankNote(banks) {
		const banks1000 = banks.filter(bank => {
			return bank.price === 1000;
		});
		const banks500 = banks.filter(bank => {
			return bank.price === 500;
		});
		const banks100 = banks.filter(bank => {
			return bank.price === 100;
		});
		return (
			banks && (
				<div className="col-12 text-right m-3">
					<h6>100 : {banks1000.length} ใบ</h6>
					<h6>500 : {banks500.length} ใบ</h6>
					<h6>1000 : {banks100.length} ใบ</h6>
				</div>
			)
		);
	}

	render() {
        const { banks , accounts} = this.props;
		return (
			<div>
				<div className="row Frame p-3 border border-dark">
					<div className="col-12 m-3">
						<div className="row">
							<div className="col-6">
								<h4 className="text-center">จำนวนยอดคงเหลือง</h4>
							</div>
							<div className="col-6">
								<h4 className="text-center">{accounts.data.length && accounts.data[0].money}</h4>
							</div>
						</div>
					</div>
					<div className="col-12 mt-3 mb-3">
						<div className="row">
							<div className="col-6">
								<h4 className="text-center">จำนวนเงินที่ต้องการถอน </h4>
							</div>
							<div className="col-6">
								<input
									type="number"
									className="form-control text-center border border-dark"
									id="money"
									name="money"
									placeholder=""
									value={this.state.money}
									onChange={this.handleChange}
								/>
							</div>
						</div>
					</div>
					<div className="col-12 text-right m-3">
						<button className="btn btn-danger mr-3">Reset</button>
						<button className="btn btn-primary" onClick={() => this.Withdraw(this.state.money)}>
							Withdraw
						</button>
					</div>
					{this.renderBankNote(banks.data)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ banks, accounts }) => ({
    banks: banks,
    accounts: accounts
});

const mapDispatchToProps = {
	fetchBanks,
	deleteBank,
    fetchAccounts,
    editAccount
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BankPage);
