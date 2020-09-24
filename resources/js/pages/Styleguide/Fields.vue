<template>
    <ui-card class="sg-fields">
        <ui-card-header title="Form Fields"></ui-card-header>

        <ui-card-body>
            <!-- Title Field -->
            <div class="row">
                <div class="col w-full">
                    <h3>Title Field</h3>
                </div>
                <div class="col w-full xl:w-1/3">
                    <ui-title-group
                        name="title"
                        label="Title"
                        help="What is your name?"
                        autocomplete="off"
                        placeholder="Name">
                    </ui-title-group>
                </div>

                <div class="col w-full xl:w-1/3">
                    <ui-title-group
                        name="title_success"
                        label="Title Success"
                        help="What is your name?"
                        autocomplete="off"
                        required
                        placeholder="Name" 
                        value="Jean-Luc Picard"
                        hasSuccess
                        successMessage="That looks like a good name!">
                    </ui-title-group>
                </div>

                <div class="col w-full xl:w-1/3">
                    <ui-title-group
                        name="title_error"
                        label="Title Error"
                        help="What is your name?"
                        autocomplete="off"
                        required
                        placeholder="Name" 
                        value="Tea, Earl Gray, Hot"
                        hasError
                        errorMessage="That is not a valid name.">
                    </ui-title-group>
                </div>
            </div>

            <hr>

            <!-- Input Field -->
            <div class="row">
                <div class="col w-full">
                    <h3>Text Input Field</h3>
                </div>
                
                <div class="col w-full xl:w-1/3">
                    <ui-input-group
                        name="input"
                        label="Input"
                        help="Help text for input."
                        autocomplete="off">
                    </ui-input-group>
                </div>

                <div class="col w-full xl:w-1/3">
                    <ui-input-group
                        name="input_success"
                        label="Input Success"
                        help="What shall we call you?"
                        autocomplete="off"
                        required 
                        value="Jean-Luc Picard"
                        hasSuccess
                        successMessage="This name is valid!">
                    </ui-input-group>
                </div>

                <div class="col w-full xl:w-1/3">
                    <ui-input-group
                        name="input_error"
                        label="Input Error"
                        type="email"
                        help="What is your email address?"
                        autocomplete="off"
                        required
                        placeholder="Name" 
                        value="make.it.so@"
                        hasError
                        errorMessage="This email is invalid.">
                    </ui-input-group>
                </div>
            </div>

            <hr>

            <!-- Password Field -->
            <div class="row">
                <div class="col w-full">
                    <h3>Password Input Field</h3>
                </div>

                <div class="col w-full md:w-1/3">
                    <ui-password-group
                        name="password"
                        label="password"
                        required
                        help="Please enter a password.">
                    </ui-password-group>
                </div>

                <div class="col w-full md:w-1/3">
                    <ui-password-group
                        name="password_error"
                        label="Password Error"
                        required
                        help="Please enter a password."
                        value="Password"
                        hasSuccess
                        successMessage="Thank you!">
                    </ui-password-group>
                </div>

                <div class="col w-full md:w-1/3">
                    <ui-password-group
                        name="password_success"
                        label="Password Success"
                        required
                        help="Please enter a password."
                        value="Password"
                        hasError
                        errorMessage="This password is incorrect.">
                    </ui-password-group>
                </div>
            </div>

            <hr>

            <!-- Number Field -->
            <div class="row">
                <div class="col w-full">
                    <h3>Number Input Field</h3>
                </div>

                <div class="col w-full sm:w-1/2 lg:w-1/4">
                    <ui-number-group
                        name="number"
                        label="Number"
                        :value="1.0"
                        :step="0.1"
                        :decimals="1"
                        help="Choose an number.">
                    </ui-number-group>
                </div>
                
                <div class="col w-full sm:w-1/2 lg:w-1/4">
                    <ui-number-group
                        name="number_success"
                        label="Number Success"
                        :required="true"
                        :value="5"
                        :step="5"
                        help="Choose an integer divisible by 5."
                        hasSuccess
                        successMessage="This value is valid!">
                    </ui-number-group>
                </div>

                <div class="col w-full sm:w-1/2 lg:w-1/4">
                    <ui-number-group
                        name="number_error"
                        label="Number Error"
                        :required="true"
                        :value="7"
                        :step="5"
                        help="Choose an integer divisible by 5."
                        hasError
                        errorMessage="This is not a valid integer.">
                    </ui-number-group>
                </div>
            </div>
            
            <hr>

            <!-- Textarea Field -->
            <div class="row">
                <div class="col w-full">
                    <h3>Textarea Field</h3>
                </div>

                <div class="col w-full xl:w-1/3">
                    <ui-textarea-group
                        name="textarea"
                        label="Textarea"
                        help="Help text for textarea."
                        autocomplete="off"
                        :rows="5">
                    </ui-textarea-group>
                </div>

                <div class="col w-full xl:w-1/3">
                    <ui-textarea-group
                        name="textarea_success"
                        label="Textarea Success"
                        help="Enter a message."
                        autocomplete="off"
                        required 
                        value="You cannot explain away a wantonly immoral act because you think that it is connected to some higher purpose."
                        hasSuccess
                        successMessage="This value is valid!"
                        :rows="5">
                    </ui-textarea-group>
                </div>

                <div class="col w-full xl:w-1/3">
                    <ui-textarea-group
                        name="textarea_error"
                        label="Textarea Error"
                        help="Enter a message."
                        autocomplete="off"
                        required
                        placeholder="Name" 
                        value="bIHeghvIpchughbIHeghpu'."
                        hasError
                        errorMessage="This value is invalid."
                        :rows="5">
                    </ui-textarea-group>
                </div>
            </div>

            <hr>

            <!-- Select Field -->
            <div class="row">
                <div class="col w-full">
                    <h3>Select Field</h3>
                </div>

                <div class="col w-full xl:w-1/3">
                    <ui-select-group
                        name="select"
                        label="Select"
                        help="Help text for select dropdown."
                        :options="[
                            {
                                'label': 'Option 1',
                                'value': 'option-1',
                            },
                            {
                                'label': 'Option 2',
                                'value': 'option-2',
                            },
                            {
                                'label': 'Option 3',
                                'value': 'option-3',
                            },
                            {
                                'label': 'Option 4',
                                'value': 'option-4',
                            },
                            {
                                'label': 'Option 5',
                                'value': 'option-5',
                            }
                        ]">
                    </ui-select-group>
                </div>

                <div class="col w-full xl:w-1/3">
                    <ui-select-group
                        name="select_success"
                        label="Select Success"
                        value="option-1"
                        help="Help text for select dropdown."
                        hasSuccess
                        successMessage="This value is valid!"
                        :options="[
                            {
                                'label': 'Option 1',
                                'value': 'option-1',
                            },
                            {
                                'label': 'Option 2',
                                'value': 'option-2',
                            },
                            {
                                'label': 'Option 3',
                                'value': 'option-3',
                            },
                            {
                                'label': 'Option 4',
                                'value': 'option-4',
                            },
                            {
                                'label': 'Option 5',
                                'value': 'option-5',
                            }
                        ]">
                    </ui-select-group>
                </div>

                <div class="col w-full xl:w-1/3">
                    <ui-select-group
                        name="select_error"
                        label="Select Error"
                        help="Help text for select dropdown."
                        hasError
                        errorMessage="A selected option is required."
                        :options="[
                            {
                                'label': 'Option 1',
                                'value': 'option-1',
                            },
                            {
                                'label': 'Option 2',
                                'value': 'option-2',
                            },
                            {
                                'label': 'Option 3',
                                'value': 'option-3',
                            },
                            {
                                'label': 'Option 4',
                                'value': 'option-4',
                            },
                            {
                                'label': 'Option 5',
                                'value': 'option-5',
                            }
                        ]">
                    </ui-select-group>
                </div>

                <div class="col w-full xl:w-1/3">
                    <ui-select-group
                        name="select_multiple"
                        label="Select Multiple"
                        help="Help text for select dropdown."
                        multiple
                        showControls
                        filterable
                        :options="[
                            {
                                'label': 'Option 1',
                                'value': 'option-1',
                            },
                            {
                                'label': 'Option 2',
                                'value': 'option-2',
                            },
                            {
                                'label': 'Option 3',
                                'value': 'option-3',
                            },
                            {
                                'label': 'Option 4',
                                'value': 'option-4',
                            },
                            {
                                'label': 'Option 5',
                                'value': 'option-5',
                            },
                            {
                                'label': 'Option 6',
                                'value': 'option-6',
                            },
                            {
                                'label': 'Option 7',
                                'value': 'option-7',
                            },
                            {
                                'label': 'Option 8',
                                'value': 'option-8',
                            },
                            {
                                'label': 'Option 9',
                                'value': 'option-9',
                            },
                            {
                                'label': 'Option 10',
                                'value': 'option-10',
                            }
                        ]">
                    </ui-select-group>
                </div>
            </div>

            <hr>

            <!-- Upload Field -->
            <div class="row">
                <div class="col w-full">
                    <h3>Upload Field</h3>
                </div>

                <div class="col w-full lg:w-1/2">
                    <ui-upload
                        name="upload"
                        label="Upload"
                        required
                        help="Upload an image."
                        multiple>
                    </ui-upload>
                </div>
            </div>
            <hr>

            <!-- Checkbox & Radio -->
            <div class="row">
                <div class="col w-full">
                    <h3>Checkboxes and Radios</h3>
                </div>

                <div class="col w-full md:w-1/2">
                    <ui-fieldset 
                        label="Checkboxes" 
                        help="Select all that apply.">
                        <ui-checkbox
                            id="checkbox_0"
                            key="0"
                            name="checkbox">
                            Checkbox 1
                        </ui-checkbox>

                        <ui-checkbox
                            id="checkbox_1"
                            key="1"
                            name="checkbox">
                            Checkbox 2
                        </ui-checkbox>

                        <ui-checkbox
                            id="checkbox_2"
                            key="2"
                            name="checkbox">
                            Checkbox 3
                        </ui-checkbox>

                        <ui-checkbox
                            id="checkbox_3"
                            key="3"
                            name="checkbox">
                            Checkbox 4
                        </ui-checkbox>

                        <ui-checkbox
                            id="checkbox_4"
                            key="4"
                            name="checkbox">
                            Checkbox 5
                        </ui-checkbox>
                    </ui-fieldset>
                </div>

                <div class="col w-full md:w-1/2">
                    <ui-fieldset 
                        label="Radios" 
                        help="Select an option.">
                        <ui-radio
                            id="radio_0"
                            key="0"
                            name="radio">
                            Radio 1
                        </ui-radio>

                        <ui-radio
                            id="radio_1"
                            key="1"
                            name="radio">
                            Radio 2
                        </ui-radio>

                        <ui-radio
                            id="radio_2"
                            key="2"
                            name="radio">
                            Radio 3
                        </ui-radio>

                        <ui-radio
                            id="radio_3"
                            key="3"
                            name="radio">
                            Radio 4
                        </ui-radio>

                        <ui-radio
                            id="radio_4"
                            key="4"
                            name="radio">
                            Radio 5
                        </ui-radio>
                    </ui-fieldset>
                </div>

                <div class="col w-full md:w-1/2">
                    <ui-fieldset
                        label="Checkboxes Inline" 
                        help="Select all that apply.">
                        <ui-checkbox
                            id="checkbox_inline_0"
                            key="0"
                            name="checkbox_inline"
                            inline>
                            Checkbox 1
                        </ui-checkbox>

                        <ui-checkbox
                            id="checkbox_inline_1"
                            key="1"
                            name="checkbox_inline"
                            inline>
                            Checkbox 2
                        </ui-checkbox>

                        <ui-checkbox
                            id="checkbox_inline_2"
                            key="2"
                            name="checkbox_inline"
                            inline>
                            Checkbox 3
                        </ui-checkbox>

                        <ui-checkbox
                            id="checkbox_inline_3"
                            key="3"
                            name="checkbox_inline"
                            inline>
                            Checkbox 4
                        </ui-checkbox>

                        <ui-checkbox
                            id="checkbox_inline_4"
                            key="4"
                            name="checkbox_inline"
                            inline>
                            Checkbox 5
                        </ui-checkbox>
                    </ui-fieldset>
                </div>

                <div class="col w-full md:w-1/2">
                    <ui-fieldset 
                        label="Radios Inline" 
                        help="Select an option.">
                        <ui-radio
                            id="radio_inline_0"
                            key="0"
                            name="radio_inline"
                            inline>
                            Radio 1
                        </ui-radio>

                        <ui-radio
                            id="radio_inline_1"
                            key="1"
                            name="radio_inline"
                            inline>
                            Radio 2
                        </ui-radio>

                        <ui-radio
                            id="radio_inline_2"
                            key="2"
                            name="radio_inline"
                            inline>
                            Radio 3
                        </ui-radio>

                        <ui-radio
                            id="radio_inline_3"
                            key="3"
                            name="radio_inline"
                            inline>
                            Radio 4
                        </ui-radio>

                        <ui-radio
                            id="radio_inline_4"
                            key="4"
                            name="radio_inline"
                            inline>
                            Radio 5
                        </ui-radio>
                    </ui-fieldset>
                </div>

                <div class="col w-full">
                    <h3>Single Checkbox w/ Content</h3>
                </div>

                <div class="col w-full md:w-1/2">
                    <ui-checkbox-single
                        id="checkbox_single"
                        name="checkbox_single"
                        required>
                        <p>I have read and understand this website's <a href="#">Terms of Service</a> and agree with all policies.</p>
                    </ui-checkbox-single>
                </div>
                
                <div class="col w-full md:w-1/2">
                    <ui-checkbox-single
                        id="checkbox_single_error"
                        name="checkbox_single_error"
                        hasError
                        errorMessage="This field is required to proceed"
                        required>
                        <p>I have read and understand this website's <a href="#">Terms of Service</a> and agree with all policies.</p>
                    </ui-checkbox-single>
                </div>
            </div>
        </ui-card-body>
    </ui-card> 
</template>

<script>
    export default {}
</script>